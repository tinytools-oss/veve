[**veve**](../README.md)

***

[veve](../globals.md) / Fn

# Function: Fn()

> **Fn**\<`T`\>(`implementation`): `TrackedFunction`\<`T`\>

Defined in: [framework/Fn.ts:389](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Fn.ts#L389)

Creates a tracked version of a given function, preserving its original type signature while
adding tracking capabilities. The returned function maintains the same behavior as the original
while providing additional methods for tracking calls, arguments, and results.

## Type Parameters

• **T** *extends* (...`args`) => `any`

The type of the function being tracked, must extend (...args: any[]) => any

## Parameters

### implementation

`T`

The original function implementation to track

## Returns

`TrackedFunction`\<`T`\>

A function that combines the original implementation with tracking capabilities

## Example

```ts
// Track a simple addition function
const add = (a: number, b: number) => a + b;
const trackedAdd = Fn(add);
trackedAdd(1, 2); // Returns 3
console.log(trackedAdd.getCallCount()); // Returns 1
```