[**veve**](../README.md)

***

[veve](../globals.md) / junit

# Interface: junit

Defined in: [reporter/junit.ts:15](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/reporter/junit.ts#L15)

## Extends

- `Reporter`

## Properties

### name

> **name**: `string`

Defined in: [reporter/Reporter.ts:62](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/reporter/Reporter.ts#L62)

Name of the reporter plugin. This is typically a descriptive name, e.g., "FileReporter".

#### Inherited from

`Reporter.name`

***

### type

> **type**: `"file"` \| `"console"`

Defined in: [reporter/Reporter.ts:69](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/reporter/Reporter.ts#L69)

The type of the reporter plugin, which determines how the report is generated and output.

#### Inherited from

`Reporter.type`

## Methods

### report()

> **report**(`options`): `Promise`\<`any`\>

Defined in: [reporter/Reporter.ts:79](https://github.com/tinytools-oss/veve/blob/be5b78158f59e7a302962ea6dd3ce70d92b54d39/src/reporter/Reporter.ts#L79)

Generates a report based on the provided options.

#### Parameters

##### options

`ReportOptions`

Configuration for generating the report.

#### Returns

`Promise`\<`any`\>

A `Promise` that resolves when the report is successfully generated. If an error occurs, it should be thrown.

#### Throws

If there is an issue generating the report (e.g., missing required output directory for file-based reports).

#### Inherited from

`Reporter.report`