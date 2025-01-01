[**veve**](../README.md)

***

[veve](../globals.md) / assert

# Function: assert()

> **assert**(`received`): [`Assertion`](../classes/Assertion.md)

Defined in: [framework/Assertion.ts:968](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L968)

Creates a new assertion instance for the provided value.
- This function performs assertions that will **throw an error** if the condition fails.
- Use this when you need hard failure handling for invalid conditions.

## Parameters

### received

`any`

The value to be asserted.

## Returns

[`Assertion`](../classes/Assertion.md)

An `Assertion` instance configured to throw errors on failure.

## Example

```ts
assert(42).toBe(42); // Passes
assert("hello").toBe("world"); // Throws an error
```