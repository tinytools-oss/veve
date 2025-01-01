[**veve**](../README.md)

***

[veve](../globals.md) / Assertion

# Class: Assertion()

Defined in: [framework/Assertion.ts:16](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L16)

> **Assertion**(`value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:383](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L383)

Asserts that the function has returned with a specific value.

## Parameters

### value

`any`

The expected return value

## Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

## Throws

If the assertion fails

## Example

```ts
const mockFn = Fn(() => 42);
mockFn();
assert(mockFn).toHaveReturnedWith(42); // Passes
```

## Constructors

### new Assertion()

> **new Assertion**(`received`, `throws`): [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:446](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L446)

#### Parameters

##### received

`any`

##### throws

`boolean`

#### Returns

[`Assertion`](Assertion.md)

## Properties

### isNot

> **isNot**: `boolean`

Defined in: [framework/Assertion.ts:442](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L442)

***

### isTracked

> **isTracked**: `boolean` = `false`

Defined in: [framework/Assertion.ts:443](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L443)

***

### received

> **received**: `any`

Defined in: [framework/Assertion.ts:441](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L441)

***

### throws

> **throws**: `boolean` = `false`

Defined in: [framework/Assertion.ts:444](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L444)

## Accessors

### not

#### Get Signature

> **get** **not**(): `this`

Defined in: [framework/Assertion.ts:453](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L453)

##### Returns

`this`

***

### rejects

#### Get Signature

> **get** **rejects**(): `this`

Defined in: [framework/Assertion.ts:477](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L477)

##### Returns

`this`

***

### resolves

#### Get Signature

> **get** **resolves**(): `this`

Defined in: [framework/Assertion.ts:458](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L458)

##### Returns

`this`

## Methods

### toBe()

#### Call Signature

> **toBe**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:165](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L165)

Asserts that the received value is strictly equal to the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBe(5); // Passes
assert(5).toBe(6); // Fails
```

#### Call Signature

> **toBe**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:643](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L643)

Asserts that the received value is strictly equal to the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBe(5); // Passes
assert(5).toBe(6); // Fails
```

***

### toBeAboveMin()

#### Call Signature

> **toBeAboveMin**(`min`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:206](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L206)

Asserts that the received value is greater than or equal to the min value.

##### Parameters

###### min

The minimum value (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeAboveMin(10); // Passes
assert(5).toBeAboveMin(10); // Fails
```

#### Call Signature

> **toBeAboveMin**(`min`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:614](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L614)

Asserts that the received value is greater than or equal to the min value.

##### Parameters

###### min

The minimum value (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeAboveMin(10); // Passes
assert(5).toBeAboveMin(10); // Fails
```

***

### toBeBelowMax()

#### Call Signature

> **toBeBelowMax**(`max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:218](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L218)

Asserts that the received value is less than or equal to the max value.

##### Parameters

###### max

The maximum value (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBelowMax(20); // Passes
assert(25).toBeBelowMax(20); // Fails
```

#### Call Signature

> **toBeBelowMax**(`max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:622](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L622)

Asserts that the received value is less than or equal to the max value.

##### Parameters

###### max

The maximum value (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBelowMax(20); // Passes
assert(25).toBeBelowMax(20); // Fails
```

***

### toBeBetween()

#### Call Signature

> **toBeBetween**(`min`, `max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:178](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L178)

Asserts that the received value is strictly between the min and max (exclusive).

##### Parameters

###### min

The lower bound (exclusive)

`number` | `bigint`

###### max

The upper bound (exclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBetween(10, 20); // Passes
assert(15).toBeBetween(15, 20); // Fails
```

#### Call Signature

> **toBeBetween**(`min`, `max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:598](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L598)

Asserts that the received value is strictly between the min and max (exclusive).

##### Parameters

###### min

The lower bound (exclusive)

`number` | `bigint`

###### max

The upper bound (exclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBetween(10, 20); // Passes
assert(15).toBeBetween(15, 20); // Fails
```

***

### toBeBetweenOrEqual()

#### Call Signature

> **toBeBetweenOrEqual**(`min`, `max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:191](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L191)

Asserts that the received value is between the min and max (inclusive).

##### Parameters

###### min

The lower bound (inclusive)

`number` | `bigint`

###### max

The upper bound (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBetweenOrEqual(10, 15); // Passes
assert(15).toBeBetweenOrEqual(16, 20); // Fails
```

#### Call Signature

> **toBeBetweenOrEqual**(`min`, `max`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:606](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L606)

Asserts that the received value is between the min and max (inclusive).

##### Parameters

###### min

The lower bound (inclusive)

`number` | `bigint`

###### max

The upper bound (inclusive)

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(15).toBeBetweenOrEqual(10, 15); // Passes
assert(15).toBeBetweenOrEqual(16, 20); // Fails
```

***

### toBeCloseTo()

#### Call Signature

> **toBeCloseTo**(`expected`, `numDigits`?): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:265](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L265)

Asserts that the number is close to another number within a specified precision.

##### Parameters

###### expected

`number`

The expected number

###### numDigits?

`number`

The number of decimal places to compare

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(3.14159).toBeCloseTo(Math.PI, 2); // Passes
```

#### Call Signature

> **toBeCloseTo**(`expected`, `numDigits`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:686](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L686)

Asserts that the number is close to another number within a specified precision.

##### Parameters

###### expected

`number`

The expected number

###### numDigits

`number` = `2`

The number of decimal places to compare

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(3.14159).toBeCloseTo(Math.PI, 2); // Passes
```

***

### toBeDefined()

#### Call Signature

> **toBeDefined**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:26](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L26)

Asserts that the received value is defined (not `undefined`).

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeDefined(); // Passes
assert(undefined).toBeDefined(); // Fails
```

#### Call Signature

> **toBeDefined**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:510](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L510)

Asserts that the received value is defined (not `undefined`).

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeDefined(); // Passes
assert(undefined).toBeDefined(); // Fails
```

***

### toBeFalsy()

#### Call Signature

> **toBeFalsy**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:70](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L70)

Asserts that the received value evaluates to `false` in a boolean context.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(false).toBeFalsy(); // Passes
assert(1).toBeFalsy(); // Fails
```

#### Call Signature

> **toBeFalsy**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:542](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L542)

Asserts that the received value evaluates to `false` in a boolean context.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(false).toBeFalsy(); // Passes
assert(1).toBeFalsy(); // Fails
```

***

### toBeGreaterThan()

#### Call Signature

> **toBeGreaterThan**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:82](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L82)

Asserts that the received value is greater than the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeGreaterThan(3); // Passes
assert(1).toBeGreaterThan(5); // Fails
```

#### Call Signature

> **toBeGreaterThan**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:550](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L550)

Asserts that the received value is greater than the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeGreaterThan(3); // Passes
assert(1).toBeGreaterThan(5); // Fails
```

***

### toBeGreaterThanOrEqual()

#### Call Signature

> **toBeGreaterThanOrEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:94](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L94)

Asserts that the received value is greater than or equal to the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(10).toBeGreaterThanOrEqual(10); // Passes
assert(5).toBeGreaterThanOrEqual(10); // Fails
```

#### Call Signature

> **toBeGreaterThanOrEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:558](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L558)

Asserts that the received value is greater than or equal to the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(10).toBeGreaterThanOrEqual(10); // Passes
assert(5).toBeGreaterThanOrEqual(10); // Fails
```

***

### toBeInstanceOf()

#### Call Signature

> **toBeInstanceOf**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:118](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L118)

Asserts that the received value is an instance of the given class.

##### Parameters

###### expected

`any`

The class to check against

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(new Date()).toBeInstanceOf(Date); // Passes
assert({}).toBeInstanceOf(Date); // Fails
```

#### Call Signature

> **toBeInstanceOf**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:574](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L574)

Asserts that the received value is an instance of the given class.

##### Parameters

###### expected

`any`

The class to check against

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(new Date()).toBeInstanceOf(Date); // Passes
assert({}).toBeInstanceOf(Date); // Fails
```

***

### toBeLessThan()

#### Call Signature

> **toBeLessThan**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:106](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L106)

Asserts that the received value is less than the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeLessThan(10); // Passes
assert(10).toBeLessThan(5); // Fails
```

#### Call Signature

> **toBeLessThan**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:566](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L566)

Asserts that the received value is less than the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(5).toBeLessThan(10); // Passes
assert(10).toBeLessThan(5); // Fails
```

***

### toBeLessThanOrEqual()

#### Call Signature

> **toBeLessThanOrEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:130](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L130)

Asserts that the received value is less than or equal to the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(10).toBeLessThanOrEqual(10); // Passes
assert(15).toBeLessThanOrEqual(10); // Fails
```

#### Call Signature

> **toBeLessThanOrEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:582](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L582)

Asserts that the received value is less than or equal to the expected value.

##### Parameters

###### expected

The expected value

`number` | `bigint`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(10).toBeLessThanOrEqual(10); // Passes
assert(15).toBeLessThanOrEqual(10); // Fails
```

***

### toBeNaN()

#### Call Signature

> **toBeNaN**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:141](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L141)

Asserts that the received value is `NaN`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(NaN).toBeNaN(); // Passes
assert(5).toBeNaN(); // Fails
```

#### Call Signature

> **toBeNaN**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:590](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L590)

Asserts that the received value is `NaN`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(NaN).toBeNaN(); // Passes
assert(5).toBeNaN(); // Fails
```

***

### toBeNull()

#### Call Signature

> **toBeNull**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:48](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L48)

Asserts that the received value is `null`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(null).toBeNull(); // Passes
assert(42).toBeNull(); // Fails
```

#### Call Signature

> **toBeNull**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:526](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L526)

Asserts that the received value is `null`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(null).toBeNull(); // Passes
assert(42).toBeNull(); // Fails
```

***

### toBeTracked()

#### Call Signature

> **toBeTracked**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:276](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L276)

Asserts that the received function is tracked.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
assert(mockFn).toBeTracked(); // Passes
```

#### Call Signature

> **toBeTracked**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:775](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L775)

Asserts that the received function is tracked.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
assert(mockFn).toBeTracked(); // Passes
```

***

### toBeTruthy()

#### Call Signature

> **toBeTruthy**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:59](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L59)

Asserts that the received value evaluates to `true` in a boolean context.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(1).toBeTruthy(); // Passes
assert(false).toBeTruthy(); // Fails
```

#### Call Signature

> **toBeTruthy**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:534](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L534)

Asserts that the received value evaluates to `true` in a boolean context.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(1).toBeTruthy(); // Passes
assert(false).toBeTruthy(); // Fails
```

***

### toBeUndefined()

#### Call Signature

> **toBeUndefined**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:37](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L37)

Asserts that the received value is `undefined`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(undefined).toBeUndefined(); // Passes
assert(42).toBeUndefined(); // Fails
```

#### Call Signature

> **toBeUndefined**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:518](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L518)

Asserts that the received value is `undefined`.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(undefined).toBeUndefined(); // Passes
assert(42).toBeUndefined(); // Fails
```

***

### toContain()

#### Call Signature

> **toContain**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:242](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L242)

Asserts that the received value contains the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert([1, 2, 3]).toContain(2); // Passes
assert("hello world").toContain("world"); // Passes
```

#### Call Signature

> **toContain**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:661](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L661)

Asserts that the received value contains the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert([1, 2, 3]).toContain(2); // Passes
assert("hello world").toContain("world"); // Passes
```

***

### toEqual()

#### Call Signature

> **toEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:230](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L230)

Asserts that the received value is deeply equal to the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert({ a: 1, b: { c: 2 } }).toEqual({ a: 1, b: { c: 2 } }); // Passes
assert([1, 2, 3]).toEqual([1, 2, 3]); // Passes
```

#### Call Signature

> **toEqual**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:651](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L651)

Asserts that the received value is deeply equal to the expected value.

##### Parameters

###### expected

`any`

The expected value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert({ a: 1, b: { c: 2 } }).toEqual({ a: 1, b: { c: 2 } }); // Passes
assert([1, 2, 3]).toEqual([1, 2, 3]); // Passes
```

***

### toHaveBeenCalled()

#### Call Signature

> **toHaveBeenCalled**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:288](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L288)

Asserts that the received function has been called.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
mockFn();
assert(mockFn).toHaveBeenCalled(); // Passes
```

#### Call Signature

> **toHaveBeenCalled**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:783](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L783)

Asserts that the received function has been called.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
mockFn();
assert(mockFn).toHaveBeenCalled(); // Passes
```

***

### toHaveBeenCalledTimes()

#### Call Signature

> **toHaveBeenCalledTimes**(`times`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:302](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L302)

Asserts that the received function has been called exactly n times.

##### Parameters

###### times

`number`

The expected number of calls

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
mockFn();
mockFn();
assert(mockFn).toHaveBeenCalledTimes(2); // Passes
```

#### Call Signature

> **toHaveBeenCalledTimes**(`times`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:796](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L796)

Asserts that the received function has been called exactly n times.

##### Parameters

###### times

`number`

The expected number of calls

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => {});
mockFn();
mockFn();
assert(mockFn).toHaveBeenCalledTimes(2); // Passes
```

***

### toHaveBeenCalledWith()

#### Call Signature

> **toHaveBeenCalledWith**(...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:315](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L315)

Asserts that the received function was called with specific arguments.

##### Parameters

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number, b: string) => {});
mockFn(42, "hello");
assert(mockFn).toHaveBeenCalledWith(42, "hello"); // Passes
```

#### Call Signature

> **toHaveBeenCalledWith**(...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:809](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L809)

Asserts that the received function was called with specific arguments.

##### Parameters

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number, b: string) => {});
mockFn(42, "hello");
assert(mockFn).toHaveBeenCalledWith(42, "hello"); // Passes
```

***

### toHaveBeenLastCalledWith()

#### Call Signature

> **toHaveBeenLastCalledWith**(...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:329](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L329)

Asserts that the function was last called with specific arguments.

##### Parameters

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number) => {});
mockFn(1);
mockFn(2);
assert(mockFn).toHaveBeenLastCalledWith(2); // Passes
```

#### Call Signature

> **toHaveBeenLastCalledWith**(...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:822](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L822)

Asserts that the function was last called with specific arguments.

##### Parameters

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number) => {});
mockFn(1);
mockFn(2);
assert(mockFn).toHaveBeenLastCalledWith(2); // Passes
```

***

### toHaveBeenNthCalledWith()

#### Call Signature

> **toHaveBeenNthCalledWith**(`n`, ...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:344](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L344)

Asserts that the nth call of the function was with specific arguments.

##### Parameters

###### n

`number`

The call number to check (1-indexed)

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number) => {});
mockFn(1);
mockFn(2);
assert(mockFn).toHaveBeenNthCalledWith(2, 2); // Passes
```

#### Call Signature

> **toHaveBeenNthCalledWith**(`n`, ...`args`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:837](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L837)

Asserts that the nth call of the function was with specific arguments.

##### Parameters

###### n

`number`

The call number to check (1-indexed)

###### args

...`any`[]

The expected arguments

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn((a: number) => {});
mockFn(1);
mockFn(2);
assert(mockFn).toHaveBeenNthCalledWith(2, 2); // Passes
```

***

### toHaveLastReturnedWith()

#### Call Signature

> **toHaveLastReturnedWith**(`value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:397](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L397)

Asserts that the function's last return was a specific value.

##### Parameters

###### value

`any`

The expected return value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveLastReturnedWith(42); // Passes
```

#### Call Signature

> **toHaveLastReturnedWith**(`value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:891](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L891)

Asserts that the function's last return was a specific value.

##### Parameters

###### value

`any`

The expected return value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveLastReturnedWith(42); // Passes
```

***

### toHaveLength()

#### Call Signature

> **toHaveLength**(`length`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:424](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L424)

Asserts that the received value has a specific length.

##### Parameters

###### length

`number`

The expected length

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert([1, 2, 3]).toHaveLength(3); // Passes
assert("hello").toHaveLength(5); // Passes
```

#### Call Signature

> **toHaveLength**(`length`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:921](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L921)

Asserts that the received value has a specific length.

##### Parameters

###### length

`number`

The expected length

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert([1, 2, 3]).toHaveLength(3); // Passes
assert("hello").toHaveLength(5); // Passes
```

***

### toHaveNthReturnedWith()

#### Call Signature

> **toHaveNthReturnedWith**(`n`, `value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:412](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L412)

Asserts that the nth return of the function was a specific value.

##### Parameters

###### n

`number`

The return number to check (1-indexed)

###### value

`any`

The expected return value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveNthReturnedWith(2, 42); // Passes
```

#### Call Signature

> **toHaveNthReturnedWith**(`n`, `value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:906](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L906)

Asserts that the nth return of the function was a specific value.

##### Parameters

###### n

`number`

The return number to check (1-indexed)

###### value

`any`

The expected return value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveNthReturnedWith(2, 42); // Passes
```

***

### toHaveProperty()

#### Call Signature

> **toHaveProperty**(`keyPath`, `value`?): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:437](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L437)

Asserts that the received object has a specific property.

##### Parameters

###### keyPath

`string`

The dot-notation path to the property

###### value?

`any`

The expected property value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert({ a: { b: 42 } }).toHaveProperty('a.b', 42); // Passes
assert({ x: 1 }).toHaveProperty('x'); // Passes
```

#### Call Signature

> **toHaveProperty**(`keyPath`, `value`?): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:929](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L929)

Asserts that the received object has a specific property.

##### Parameters

###### keyPath

`string`

The dot-notation path to the property

###### value?

`any`

The expected property value

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert({ a: { b: 42 } }).toHaveProperty('a.b', 42); // Passes
assert({ x: 1 }).toHaveProperty('x'); // Passes
```

***

### toHaveReturned()

#### Call Signature

> **toHaveReturned**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:356](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L356)

Asserts that the function has returned at least once.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
assert(mockFn).toHaveReturned(); // Passes
```

#### Call Signature

> **toHaveReturned**(): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:852](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L852)

Asserts that the function has returned at least once.

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
assert(mockFn).toHaveReturned(); // Passes
```

***

### toHaveReturnedTimes()

#### Call Signature

> **toHaveReturnedTimes**(`times`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:370](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L370)

Asserts that the function has returned exactly n times.

##### Parameters

###### times

`number`

The expected number of returns

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveReturnedTimes(2); // Passes
```

#### Call Signature

> **toHaveReturnedTimes**(`times`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:863](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L863)

Asserts that the function has returned exactly n times.

##### Parameters

###### times

`number`

The expected number of returns

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
const mockFn = Fn(() => 42);
mockFn();
mockFn();
assert(mockFn).toHaveReturnedTimes(2); // Passes
```

***

### toHaveReturnedWith()

> **toHaveReturnedWith**(`value`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:876](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L876)

#### Parameters

##### value

`any`

#### Returns

`boolean` \| [`Assertion`](Assertion.md)

***

### toMatch()

#### Call Signature

> **toMatch**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:153](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L153)

Asserts that the received value matches the provided pattern.

##### Parameters

###### expected

The expected pattern

`string` | `RegExp`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert("hello").toMatch(/he/); // Passes
assert("world").toMatch("wor"); // Passes
```

#### Call Signature

> **toMatch**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:630](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L630)

Asserts that the received value matches the provided pattern.

##### Parameters

###### expected

The expected pattern

`string` | `RegExp`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert("hello").toMatch(/he/); // Passes
assert("world").toMatch("wor"); // Passes
```

***

### toThrow()

#### Call Signature

> **toThrow**(`expected`): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:253](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L253)

Asserts that a tracked function throws an expected exception.

##### Parameters

###### expected

`any`

The expected exception

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(() => { throw new Error("Expected error") }).toThrow("Expected error"); // Passes
```

#### Call Signature

> **toThrow**(`expected`?): `boolean` \| [`Assertion`](Assertion.md)

Defined in: [framework/Assertion.ts:698](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/framework/Assertion.ts#L698)

Asserts that a tracked function throws an expected exception.

##### Parameters

###### expected?

The expected exception

`string` | `RegExp` | `Error`

##### Returns

`boolean` \| [`Assertion`](Assertion.md)

The assertion result

##### Throws

If the assertion fails

##### Example

```ts
assert(() => { throw new Error("Expected error") }).toThrow("Expected error"); // Passes
```