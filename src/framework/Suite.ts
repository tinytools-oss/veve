/*
 * Copyright (c) 2024 Discuzz Labs Organization
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { SuiteReport } from "../types";

export type TestFunction = () => void | Promise<void>;
type HookFunction = () => void | Promise<void>;

interface TestCase {
    description: string;
    fn: TestFunction;
}

interface Hook {
    type: "beforeAll" | "beforeEach";
    fn: HookFunction;
}

export interface Suite {
    description: string;
    tests: TestCase[];
    hooks: Hook[];
    children: Suite[];
    result: {
        passed: boolean;
        tests: Array<{
            description: string;
            passed: boolean;
            error: {
                message: string | null;
                stack: string | null;
            };
        }>;
        hooks: Array<{
            type: "beforeAll" | "beforeEach";
            passed: boolean;
            error: {
                message: string | null;
                stack: string | null;
            };
        }>;
    };
}

const rootSuite: Suite = {
    description: "Root Suite of the file (always empty)",
    children: [],
    tests: [],
    hooks: [],
    result: {
        tests: [],
        hooks: [],
        passed: true,
    },
};
let currentSuite: Suite = rootSuite;

// Register a new describe block
export function describe(description: string, callback: () => void): void {
    const newSuite: Suite = {
        description,
        tests: [],
        hooks: [],
        children: [],
        result: {
            passed: true, // Assume the suite passes initially
            tests: [],
            hooks: [],
        },
    };
    currentSuite.children.push(newSuite);
    const previousSuite = currentSuite; // Save current suite
    currentSuite = newSuite; // Set the current suite to the new one

    callback(); // Execute the callback to register tests/hooks in the current suite

    currentSuite = previousSuite; // Restore previous suite context
}

// Register a test case
export function it(description: string, fn: TestFunction): void {
    currentSuite.tests.push({ description, fn });
}

// Register a beforeAll hook
export function beforeAll(fn: HookFunction): void {
    currentSuite.hooks.push({ type: "beforeAll", fn });
}

// Register a beforeEach hook
export function beforeEach(fn: HookFunction): void {
    currentSuite.hooks.push({ type: "beforeEach", fn });
}

// Helper function to run a suite and its nested suites
async function runSuite(suite: Suite): Promise<SuiteReport> {
    const suiteResult: SuiteReport = {
        description: suite.description,
        result: {
            passed: true,
            tests: [],
            hooks: [],
        },
        children: [],
        error: { message: null, stack: null },
    };
    try {
        // Run all beforeAll hooks for the current suite
        for (const hook of suite.hooks) {
            let hookResult = {
                type: hook.type,
                passed: true,
                error: { message: null, stack: null },
            };
            try {
                await hook.fn();
            } catch (error: any) {
                hookResult.passed = false;
                hookResult.error = {
                    message: error.message,
                    stack: error.stack,
                };
            }

            suiteResult.result.hooks.push(hookResult);

            if (!hookResult.passed) {
                suiteResult.result.passed = false; // If any hook fails, the suite fails
            }
        }

        // Run all tests in the current suite
        for (const test of suite.tests) {
            const testResult = {
                description: test.description,
                passed: true,
                error: { message: null, stack: null },
            };
            try {
                await test.fn();
            } catch (error: any) {
                testResult.passed = false;
                testResult.error = {
                    message: error.message,
                    stack: error.stack,
                };
            }
            suiteResult.result.tests.push(testResult);

            if (!testResult.passed) {
                suiteResult.result.passed = false; // If any test fails, the suite fails
            }
        }

        // Recursively run child suites and collect results
        for (const childSuite of suite.children) {
            const childResult = await runSuite(childSuite);
            suiteResult.children.push(childResult);
            if (!childResult.result.passed) {
                suiteResult.result.passed = false; // If any child suite fails, the parent fails
            }
        }
    } catch (error: any) {
        suiteResult.error = {
            message: error.message,
            stack: error.stack
        }
    } finally {
        return suiteResult;
    }
}

// Execute all suites starting from the root suite
export async function run(): Promise<void> {
    const report = await runSuite(rootSuite);
    if(process.send){
        process.send({
            type: "report",
            report
        })
        process.exit(0)
    }
}
