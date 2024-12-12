// Generated by dts-bundle-generator v9.5.1

import { Plugin as Plugin$1 } from 'esbuild';
import { SourceMapConsumer } from 'source-map';
import "./global"

export interface LogEntry {
	type: string;
	args: any[];
}
export interface ErrorMetadata {
	message: string;
	stack?: string;
}
export interface ErrorInspectOptions {
	error: ErrorMetadata | Error;
	file?: string;
	sourceMap?: SourceMapConsumer;
	noColor?: boolean;
}
export declare class ErrorInspect {
	private static readonly STACK_FRAME_REGEX;
	private static readonly CONTEXT_LINES;
	private static colorize;
	private static line;
	private static parse;
	private static stack;
	private static context;
	private static buildMessage;
	static format(options: ErrorInspectOptions): string;
}
export interface BenchmarkMetrics {
	throughputAvg: number;
	throughputMedian: number;
	latencyAvg: number;
	latencyMedian: number;
	samples: number;
	timestamp: number;
}
export type Status = "passed" | "failed" | "softfailed" | "skipped" | "todo" | "benched";
export type TestCaseStatus = "passed" | "failed" | "pending" | "empty";
export type HookTypes = "afterAll" | "afterEach" | "beforeAll" | "beforeEach";
export type TestResult = {
	description: string;
	status: Status;
	retries: number;
	duration: number;
	error?: ErrorMetadata;
	bench: BenchmarkMetrics | null;
};
export type HookResult = {
	description: HookTypes;
	status: Status;
	retries: number;
	duration: number;
	error?: ErrorMetadata;
	bench: null;
};
export interface Stats {
	total: number;
	skipped: number;
	passed: number;
	failed: number;
	softfailed: number;
	todo: number;
}
export interface TestReport {
	stats: Stats;
	description: string;
	status: TestCaseStatus;
	tests: TestResult[];
	hooks: HookResult[];
}
export interface PoolResult {
	error: any;
	report: TestReport | null;
	duration: number;
	logs: LogEntry[];
	sourceMap: SourceMapConsumer;
}
export interface ReporterPlugin {
	reporter: Reporter;
	options?: Record<any, any>;
}
export interface Reporter {
	/** Name of the reporter plugin */
	name: string;
	/**
	 * The type of the reporter plugin.
	 *
	 * - `"file"`: Writes the report to a file.
	 * - `"console"`: Outputs the report to the console.
	 */
	type: "file" | "console";
	/**
	 * Generates a report based on the provided options.
	 *
	 * @param {Object} options - Configuration for generating the report.
	 * @param {Map<string, PoolResult>} options.reports - A map containing report data where the key is a string identifier and the value is a `PoolResult`.
	 * @param {string} [options.outputDir] - Directory where the report should be saved. Required if the plugin type is `"file"`.
	 *
	 * @example
	 * const plugin: ReporterPlugin = {
	 *   name: "FileReporter",
	 *   type: "file",
	 *   report: async (options) => {
	 *     console.log("Generating report...");
	 *     // Implementation here...
	 *   },
	 * };
	 *
	 * @returns {Promise<void>} Resolves when the report is successfully generated.
	 */
	report(options: {
		/**
		 * A map containing report data where:
		 * - The key is a unique string identifier for the report.
		 * - The value is an object of type `PoolResult`.
		 */
		reports: Map<string, PoolResult>;
		/**
		 * The directory where the report should be saved.
		 */
		outputDir?: string;
		[key: string]: any;
	}): Promise<void>;
}
/**
 * Type representing the configuration options for Veve.
 */
export interface Veve {
	/**
	 * A list of patterns to include for processing.
	 * @example ['src/app.ts', 'src/utils.tsx']
	 */
	pattern: string[];
	/**
	 * A list of patterns to exclude from processing.
	 * @example ['node_modules', 'dist']
	 */
	exclude: string[];
	/**
	 * A list of environment names where this configuration will be applied.
	 * @example ['development', 'production', 'test']
	 */
	envs: string[];
	/**
	 * A list of eabuild plugins to be used in the configuration.
	 */
	plugins: Plugin$1[];
	/**
	 * The timeout value in milliseconds for operations.
	 * @example 3000
	 */
	timeout: number;
	/**
	 * A context object that can hold any key-value pair.
	 * @example { key: 'value', flag: true }
	 */
	context: Record<any, any>;
	/**
	 * The TypeScript configuration options.
	 * @example { strict: true, baseUrl: './' }
	 */
	tsconfig: Tsconfig;
	/**
	 * Whether to watch files for changes.
	 * @example true
	 */
	watch: boolean;
	/**
	 * List of modules to auto require inside the testing files
	 * @example ["jsdom-global/register"]
	 */
	require: string[];
	/**
	 * List of reporter plugins
	 * @example ["jsdom-global/register"]
	 */
	reporters: ReporterPlugin[];
	/**
	 * Defines the file path for reporters to save their outputs.
	 * @example "./reports"
	 */
	output: string;
}
/**
 * Interface representing TypeScript configuration options.
 */
export interface Tsconfig {
	/**
	 * Whether to enforce strict mode in all files.
	 * @example true
	 */
	alwaysStrict?: boolean;
	/**
	 * The base URL for module resolution.
	 * @example './src'
	 */
	baseUrl?: string;
	/**
	 * Enables experimental decorator support.
	 * @example true
	 */
	experimentalDecorators?: boolean;
	/**
	 * Specifies how imports not used as values should be treated.
	 * @example 'remove'
	 */
	importsNotUsedAsValues?: "remove" | "preserve" | "error";
	/**
	 * Specifies the JSX code generation style.
	 * @example 'react-jsx'
	 */
	jsx?: "preserve" | "react-native" | "react" | "react-jsx" | "react-jsxdev";
	/**
	 * Factory function for creating JSX elements.
	 * @example 'React.createElement'
	 */
	jsxFactory?: string;
	/**
	 * Factory function for creating JSX fragment elements.
	 * @example 'React.Fragment'
	 */
	jsxFragmentFactory?: string;
	/**
	 * Specifies the module specifier for JSX imports.
	 * @example '@emotion/react'
	 */
	jsxImportSource?: string;
	/**
	 * A mapping of module paths to arrays of paths.
	 * @example { '@utils': ['./src/utils'] }
	 */
	paths?: Record<string, string[]>;
	/**
	 * Whether to preserve value imports in the emitted JavaScript.
	 * @example true
	 */
	preserveValueImports?: boolean;
	/**
	 * Whether to enable strict type checking options.
	 * @example true
	 */
	strict?: boolean;
	/**
	 * Whether to use `define` for class field initialization.
	 * @example true
	 */
	useDefineForClassFields?: boolean;
	/**
	 * Whether to keep the module syntax as-is in the emitted JavaScript.
	 * @example true
	 */
	verbatimModuleSyntax?: boolean;
}
export declare function veve(config: Partial<Veve>): Partial<Veve>;
export interface spec extends Reporter {
}
export declare const spec: spec;
export interface junit extends Reporter {
}
/**
 * Generates a JUnit XML report for the provided test results.
 *
 * @returns {Promise<void>} Resolves when the XML report is successfully written to a file.
 */
export declare const junit: junit;
export interface json extends Reporter {
}
/**
 * Generates a comprehensive JSON report for the provided test results.
 *
 * @returns {Promise<void>} Resolves when the JSON report is successfully written to a file.
 */
export declare const json: json;
/**
 * Represents the contract for an XML document writer.
 * Provides methods to build XML documents with support for tags, attributes, and content.
 */
export interface XML {
	/**
	 * Opens a new XML tag with optional attributes.
	 *
	 * @param name - The name of the tag
	 * @param attributes - Optional key-value pairs of attributes
	 * @returns The XMLWriter instance for method chaining
	 *
	 * @example
	 * writer.openTag('person', { id: 1, type: 'employee' })
	 */
	openTag(name: string, attributes?: Record<string, string | number>): XML;
	/**
	 * Adds a self-closing XML tag with optional attributes.
	 *
	 * @param name - The name of the tag
	 * @param attributes - Optional key-value pairs of attributes
	 * @returns The XMLWriter instance for method chaining
	 *
	 * @example
	 * writer.selfClosingTag('image', { src: 'profile.jpg', width: 100 })
	 */
	selfClosingTag(name: string, attributes?: Record<string, string | number>): XML;
	/**
	 * Adds an XML tag with content and optional attributes.
	 *
	 * @param name - The name of the tag
	 * @param content - The text content of the tag
	 * @param attributes - Optional key-value pairs of attributes
	 * @returns The XMLWriter instance for method chaining
	 *
	 * @example
	 * writer.tag('name', 'John Doe', { type: 'full' })
	 */
	tag(name: string, content: string, attributes?: Record<string, string | number>): XML;
	/**
	 * Closes the most recently opened tag.
	 *
	 * @param name - The name of the tag to close
	 * @returns The XMLWriter instance for method chaining
	 *
	 * @example
	 * writer.openTag('person').closeTag('person')
	 */
	closeTag(name: string): XML;
	/**
	 * Generates the complete XML document as a string.
	 *
	 * @returns The full XML document
	 *
	 * @example
	 * const xmlString = writer.toString();
	 */
	toString(): string;
}
export declare class XML {
	private buffer;
	private indent;
	constructor();
	/**
	 * Escape XML special characters
	 */
	private escapeXml;
}
/**
 * A class providing assertion methods for testing.
 */
export interface Assertion {
	/**
	 * Asserts that the received value is defined (not `undefined`).
	 * @returns {Assertion | boolean} Assertion result.
	 * @example
	 * assert(5).toBeDefined(); // Passes
	 * assert(undefined).toBeDefined(); // Fails
	 */
	toBeDefined(): Assertion | boolean;
	/**
	 * Checks if the received value is `undefined`
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(undefined).toBeUndefined(); // Passes
	 * assert(42).toBeUndefined(); // Fails
	 */
	toBeUndefined(): Assertion | boolean;
	/**
	 * Checks if the received value is `null`
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(null).toBeNull(); // Passes
	 * assert(42).toBeNull(); // Fails
	 */
	toBeNull(): Assertion | boolean;
	/**
	 * Checks if the received value evaluates to `true` in a boolean context
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(1).toBeTruthy(); // Passes
	 * assert(false).toBeTruthy(); // Fails
	 */
	toBeTruthy(): Assertion | boolean;
	/**
	 * Asserts that the received value is falsy (evaluates to `false` in a boolean context).
	 * @returns {Assertion | boolean} Assertion result.
	 * @example
	 * assert(false).toBeFalsy(); // Passes
	 * assert(1).toBeFalsy(); // Fails
	 */
	toBeFalsy(): Assertion | boolean;
	/**
	 * Asserts that the received value is greater than the expected value.
	 * @param {number | bigint} expected - The expected value.
	 * @returns {Assertion | boolean} Assertion result.
	 * @example
	 * assert(5).toBeGreaterThan(3); // Passes
	 * assert(1).toBeGreaterThan(5); // Fails
	 */
	toBeGreaterThan(expected: number | bigint): Assertion | boolean;
	/**
	 * Checks if the received value is greater than or equal to the expected value
	 * @param {number | bigint} expected - The value to compare against
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(10).toBeGreaterThanOrEqual(10); // Passes
	 * assert(5).toBeGreaterThanOrEqual(10); // Fails
	 */
	toBeGreaterThanOrEqual(expected: number | bigint): Assertion | boolean;
	/**
	 * Checks if the received value is less than the expected value
	 * @param {number | bigint} expected - The value to compare against
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(5).toBeLessThan(10); // Passes
	 * assert(10).toBeLessThan(5); // Fails
	 */
	toBeLessThan(expected: number | bigint): Assertion | boolean;
	/**
	 * Checks if the received value is an instance of the given class or constructor
	 * @param {Function} expectedClass - The class or constructor to check against
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(new Date()).toBeInstanceOf(Date); // Passes
	 * assert({}).toBeInstanceOf(Date); // Fails
	 */
	toBeInstanceOf(expectedClass: (...args: any) => any): Assertion | boolean;
	/**
	 * Checks if the received value is less than or equal to the expected value
	 * @param {number | bigint} expected - The value to compare against
	 * @returns {Assertion | boolean} - The result of the assertion
	 * @example
	 * assert(10).toBeLessThanOrEqual(10); // Passes
	 * assert(15).toBeLessThanOrEqual(10); // Fails
	 */
	toBeLessThanOrEqual(expected: number | bigint): Assertion | boolean;
	/**
	 * Checks if a value is `NaN`.
	 * @returns {Assertion | boolean} Assertion result.
	 * @example
	 * assert(NaN).toBeNaN(); // Passes
	 * assert(5).toBeNaN(); // Fails
	 */
	toBeNaN(): Assertion | boolean;
	/**
	 * Asserts that the received value matches the provided regular expression or string.
	 * @param {RegExp | string} expected - The expected pattern.
	 * @returns {Assertion | boolean} Assertion result.
	 * @example
	 * assert("hello").toMatch(/he/); // Passes
	 * assert("world").toMatch("wor"); // Passes
	 */
	toMatch(expected: RegExp | string): Assertion | boolean;
	/**
	 * Checks if the received value is strictly equal to the expected value
	 * @param {any} expected - The value to compare against
	 * @returns {Assertion | boolean} Assertion result
	 * @example
	 * // Passes
	 * assert(5).toBe(5)
	 *
	 * // Fails
	 * assert(5).toBe(6)
	 */
	toBe(expected: any): Assertion | boolean;
	/**
	 * Asserts that the received value is deeply equal to the expected value.
	 * - Performs a deep comparison between the received and expected values,
	 *   checking all nested properties for equality.
	 * - Suitable for comparing objects, arrays, and primitives.
	 *
	 * @param {any} expected - The value to compare against the received value.
	 * @returns {Assertion | boolean} - Returns an Assertion instance or a boolean depending on configuration.
	 *
	 * @example
	 * // Objects with the same structure pass
	 * assert({ a: 1, b: { c: 2 } }).toEqual({ a: 1, b: { c: 2 } }); // Passes
	 *
	 * // Arrays with the same elements pass
	 * assert([1, 2, 3]).toEqual([1, 2, 3]); // Passes
	 *
	 * // Primitives with the same value pass
	 * assert(42).toEqual(42); // Passes
	 */
	toEqual(expected: any): Assertion | boolean;
	/**
	 * Checks if the received value contains the expected value.
	 * - For arrays, it checks if the array includes the expected value.
	 * - For strings, it checks if the string includes the expected substring.
	 *
	 * @param {any} expected - The value to check for in the received value.
	 * @returns {Assertion | boolean} - The result of the assertion.
	 * @example
	 * assert([1, 2, 3]).toContain(2); // Passes
	 * assert("hello world").toContain("world"); // Passes
	 * assert([1, 2, 3]).toContain(5); // Fails
	 */
	toContain(expected: any): Assertion | boolean;
	/**
	 * Checks if the number is close to another number within a specified precision
	 * @param {number} expected - Expected number
	 * @param {number} [numDigits=2] - Number of decimal places to compare
	 * @returns {Assertion | boolean} Assertion result
	 * @example
	 * assert(3.14159).toBeCloseTo(Math.PI, 2)
	 */
	toBeCloseTo(expected: number, numDigits?: number): Assertion | boolean;
	/**
	 * Checks if the received function has been called
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => {});
	 * mockFn();
	 * assert(mockFn).toHaveBeenCalled()
	 */
	toBeTracked(): Assertion | boolean;
	/**
	 * Checks if the received function has been called
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => {});
	 * mockFn();
	 * assert(mockFn).toHaveBeenCalled()
	 */
	toHaveBeenCalled(): Assertion | boolean;
	/**
	 * Checks if the received function has been called exactly n times
	 * @param {number} times - Number of expected calls
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => {});
	 * mockFn();
	 * mockFn();
	 * assert(mockFn).toHaveBeenCalledTimes(2)
	 */
	toHaveBeenCalledTimes(times: number): Assertion | boolean;
	/**
	 * Checks if the received function was called with specific arguments
	 * @param {...any} args - Arguments to check
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn((a: number, b: string) => {});
	 * mockFn(42, "hello");
	 * assert(mockFn).toHaveBeenCalledWith(42, "hello")
	 */
	toHaveBeenCalledWith(...args: any[]): Assertion | boolean;
	/**
	 * Checks if the function was last called with specific arguments
	 * @param {...any} args - Arguments to check for the last call
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn((a: number) => {});
	 * mockFn(1);
	 * mockFn(2);
	 * assert(mockFn).toHaveBeenLastCalledWith(2)
	 */
	toHaveBeenLastCalledWith(...args: any[]): Assertion | boolean;
	/**
	 * Checks if the nth call of the function was with specific arguments
	 * @param {number} n - The call number to check (1-indexed)
	 * @param {...any} args - Arguments to check for the nth call
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn((a: number) => {});
	 * mockFn(1);
	 * mockFn(2);
	 * mockFn(3);
	 * assert(mockFn).toHaveBeenNthCalledWith(2, 2)
	 */
	toHaveBeenNthCalledWith(n: number, ...args: any[]): Assertion | boolean;
	/**
	 * Checks if the function has returned at least once
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => 42);
	 * mockFn();
	 * assert(mockFn).toHaveReturned()
	 */
	toHaveReturned(): Assertion | boolean;
	/**
	 * Checks if the function has returned exactly n times
	 * @param {number} times - Number of expected returns
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => 42);
	 * mockFn();
	 * mockFn();
	 * assert(mockFn).toHaveReturnedTimes(2)
	 */
	toHaveReturnedTimes(times: number): Assertion | boolean;
	/**
	 * Checks if the function has returned with a specific value
	 * @param {any} value - The value to check for in return values
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => 42);
	 * mockFn();
	 * assert(mockFn).toHaveReturnedWith(42)
	 */
	toHaveReturnedWith(value: any): Assertion | boolean;
	/**
	 * Checks if the function's last return was a specific value
	 * @param {any} value - The value to check for in the last return
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => 42);
	 * mockFn();
	 * mockFn();
	 * assert(mockFn).toHaveLastReturnedWith(42)
	 */
	toHaveLastReturnedWith(value: any): Assertion | boolean;
	/**
	 * Checks if the nth return of the function was a specific value
	 * @param {number} n - The return number to check (1-indexed)
	 * @param {any} value - The value to check for in the nth return
	 * @returns {Assertion | boolean} Assertion result
	 * @throws {Error} If received is not a tracked function
	 * @example
	 * const mockFn = Fn(() => 42);
	 * mockFn();
	 * mockFn();
	 * assert(mockFn).toHaveNthReturnedWith(2, 42)
	 */
	toHaveNthReturnedWith(n: number, value: any): Assertion | boolean;
	/**
	 * Checks if the received value has a specific length
	 * @param {number} length - Expected length
	 * @returns {Assertion | boolean} Assertion result
	 * @example
	 * assert([1, 2, 3]).toHaveLength(3)
	 * assert("hello").toHaveLength(5)
	 */
	toHaveLength(length: number): Assertion | boolean;
	/**
	 * Checks if the received object has a specific property with an optional value
	 * @param {string} keyPath - Dot-notation path to the property
	 * @param {any} [value] - Optional expected value of the property
	 * @returns {Assertion | boolean} Assertion result
	 * @example
	 * assert({ a: { b: 42 } }).toHaveProperty('a.b', 42)
	 * assert({ x: 1 }).toHaveProperty('x')
	 */
	toHaveProperty(keyPath: string, value?: any): Assertion | boolean;
}
export declare class Assertion {
	received: any;
	isNot: boolean;
	isTracked: boolean;
	throws: boolean;
	constructor(received: any, throws: boolean);
	get not(): this;
	get resolves(): this;
	get rejects(): this;
	private assert;
}
/**
 * Creates a new assertion instance for the provided value.
 * - This function performs assertions that will **throw an error** if the condition fails.
 * - Use this when you need hard failure handling for invalid conditions.
 *
 * @param {any} received - The value to be asserted.
 * @example
 * assert(42).toBe(42); // Passes
 * assert("hello").toBe("world"); // Throws an error
 * @returns {Assertion} An `Assertion` instance configured to throw errors on failure.
 */
export declare function assert(received: any): Assertion;
/**
 * Creates a new assertion instance for the provided value.
 * - This function performs non-throwing assertions, which do not raise errors on failure.
 * - Use this for scenarios where you want to test conditions without interrupting execution.
 *
 * @param {any} received - The value to be strictly asserted.
 * @example
 * is(42).toBe(42); // Passes
 * is("hello").toBe("world"); // Does not throw, but marks failure
 * @returns {Assertion} An `Assertion` instance configured to silently handle failures.
 */
export declare function is(received: any): Assertion;
/**
 * Interface representing a tracking function with utilities for inspecting calls, arguments, and results.
 * @template T - The arguments of the tracked function, defaults to any[].
 * @template R - The return type of the tracked function, defaults to any.
 */
export interface TrackFn<T extends any[] = any[], R = any> {
	/**
	 * Retrieves all the function calls made to the tracked function.
	 * @returns {ReadonlyArray<FunctionCall<T, R>>} An array of recorded function calls.
	 * @example trackFn.getCalls();
	 */
	getCalls(): ReadonlyArray<FunctionCall<T, R>>;
	/**
	 * Retrieves a specific function call by index.
	 * @param {number} index - The index of the function call.
	 * @returns {FunctionCall<T, R> | undefined} The function call at the specified index, or undefined if not found.
	 * @example trackFn.getCall(0);
	 */
	getCall(index: number): FunctionCall<T, R> | undefined;
	/**
	 * Retrieves the most recent function call made to the tracked function.
	 * @returns {FunctionCall<T, R> | undefined} The latest function call, or undefined if no calls have been made.
	 * @example trackFn.getLatestCall();
	 */
	getLatestCall(): FunctionCall<T, R> | undefined;
	/**
	 * Retrieves the total number of times the tracked function has been called.
	 * @returns {number} The total call count.
	 * @example trackFn.getCallCount();
	 */
	getCallCount(): number;
	/**
	 * Retrieves the arguments passed to all function calls.
	 * @returns {ReadonlyArray<T>} An array of arguments for each call.
	 * @example trackFn.getAllArgs();
	 */
	getAllArgs(): ReadonlyArray<T>;
	/**
	 * Retrieves the arguments passed to a specific function call by index.
	 * @param {number} index - The index of the function call.
	 * @returns {T | undefined} The arguments for the specified call, or undefined if not found.
	 * @example trackFn.getArgsForCall(1);
	 */
	getArgsForCall(index: number): T | undefined;
	/**
	 * Retrieves the return values of all function calls.
	 * @returns {ReadonlyArray<R>} An array of return values.
	 * @example trackFn.getReturnValues();
	 */
	getReturnValues(): ReadonlyArray<R>;
	/**
	 * Retrieves the exceptions thrown during function calls.
	 * @returns {ReadonlyArray<FunctionException>} An array of thrown exceptions.
	 * @example trackFn.getExceptions();
	 */
	getExceptions(): ReadonlyArray<FunctionException>;
	/**
	 * Checks if the tracked function was called at least once.
	 * @returns {boolean} True if the function was called, otherwise false.
	 * @example trackFn.wasCalled();
	 */
	wasCalled(): boolean;
	/**
	 * Checks if the tracked function was called with specific arguments.
	 * @param {...T} args - The arguments to check.
	 * @returns {boolean} True if the function was called with the specified arguments, otherwise false.
	 * @example trackFn.wasCalledWith('arg1', 'arg2');
	 */
	wasCalledWith(...args: T): boolean;
	/**
	 * Checks if the tracked function was called a specific number of times.
	 * @param {number} n - The number of calls to check.
	 * @returns {boolean} True if the function was called exactly n times, otherwise false.
	 * @example trackFn.wasCalledTimes(3);
	 */
	wasCalledTimes(n: number): boolean;
	/**
	 * Sets the return value for the tracked function.
	 * @param {R} value - The value to be returned.
	 * @returns {TrackFn<T, R>} The updated tracked function.
	 * @example trackFn.return('value');
	 */
	return(value: R): TrackFn<T, R>;
	/**
	 * Configures the tracked function to throw a specific error.
	 * @param {Error} error - The error to be thrown.
	 * @returns {TrackFn<T, R>} The updated tracked function.
	 * @example trackFn.throw(new Error('Something went wrong'));
	 */
	throw(error: Error): TrackFn<T, R>;
	/**
	 * Replaces the tracked function with a custom implementation.
	 * @template F - The custom function type.
	 * @param {F} fn - The custom function to use.
	 * @returns {TrackFn<T, R>} The updated tracked function.
	 * @example trackFn.use((arg1, arg2) => arg1 + arg2);
	 */
	use<F extends (...args: any[]) => any>(fn: F): TrackFn<T, R>;
	/**
	 * Resets the state of the tracked function, clearing all recorded calls, arguments, and results.
	 * @returns {TrackFn<T, R>} The reset tracked function.
	 * @example trackFn.reset();
	 */
	reset(): TrackFn<T, R>;
	/**
	 * Clears all recorded calls and arguments but retains custom behavior configurations.
	 * @returns {TrackFn<T, R>} The cleared tracked function.
	 * @example trackFn.clear();
	 */
	clear(): TrackFn<T, R>;
}
export interface FunctionCall<T extends any[], R> {
	args: T;
	timestamp: Date;
	result: R;
}
export interface FunctionException {
	error: Error;
	timestamp: Date;
}
export declare class TrackFn<T extends any[], R> {
	private _implementation;
	private _calls;
	private _returnValues;
	private _exceptions;
	private _callCount;
	private _instances;
	constructor(_implementation: (...args: T) => R);
	track: () => ((...args: T) => R);
	private recordCall;
	private recordException;
	returns(value: R): TrackFn<T, R>;
	throws(error: Error): TrackFn<T, R>;
}
/**
 * Creates a tracked version of a given function.
 *
 * @template T - The argument types of the function.
 * @template R - The return type of the function.
 * @param {(...args: T) => R} implementation - The original function implementation.
 * @returns {(...args: T) => R} A tracked version of the provided function.
 *
 * @example
 * const add = (a: number, b: number) => a + b;
 * const trackedAdd = Fn(add);
 * trackedAdd(1, 2); // 3
 */
export declare function Fn<T extends any[], R>(implementation: (...args: T) => R): (...args: T) => R;
/**
 * Replaces a method on an object with a tracked version of the method.
 *
 * @template T - The argument types of the method.
 * @template R - The return type of the method.
 * @param {{ [key: string]: (...args: T) => R }} obj - The object containing the method.
 * @param {string} method - The name of the method to replace.
 * @returns {(...args: T) => R} The tracked version of the method.
 *
 * @throws {Error} If the method does not exist on the object or is not a function.
 *
 * @example
 * const obj = { multiply: (a: number, b: number) => a * b };
 * const trackedMultiply = spy(obj, 'multiply');
 * obj.multiply(2, 3); // 6
 * console.log(trackedMultiply.getCallCount()); // 1
 */
export declare function spy<T extends any[], R>(obj: {
	[key: string]: (...args: T) => R;
}, method: string): (...args: T) => R;
/**
 * Checks if a value is a tracked function.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a tracked function, otherwise false.
 *
 * @example
 * const trackedAdd = Fn((a: number, b: number) => a + b);
 * console.log(isFn(trackedAdd)); // true
 */
export declare function isFn(value: any): boolean;

export {};
