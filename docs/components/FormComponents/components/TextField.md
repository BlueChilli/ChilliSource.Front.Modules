# TextField

The `TextField` component is a single line input field that allows the user to enter some text. It supports all the props that the `HTMLInputElement` supports and a few others.

## Usage

- Basic

```js
<TextField label="Single Line Input" name="demoTextField" />
```

<br />

- Few additional basic props

```diff
<TextField
  label="Single Line Input"
  name="demoTextField"
+ placeholder="Enter some text"
+ helperText="This is some helper text"
+ className="margin-top-2"
/>
```

<br />

## Properties

| Property           | Required | Optional | Type       | Description                                                                                                                                        |
| ------------------ | -------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | `true`   |          | `string`   | The unique name assigned to the field                                                                                                              |
| className          |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                                                            |
| placeholder        |          | `true`   | `string`   | Text shown when the field has no value                                                                                                             |
| onFocus            |          | `true`   | `function` | Custom event handler if you'd like to handle `onfocus` yourself                                                                                    |
| onBlur             |          | `true`   | `function` | Custom event handler if you'd like to handle `onblur` yourself                                                                                     |
| type               |          | `true`   | `string`   | Possible values are `url`, `email`, `text`, `password`, `number`, `tel`, `hidden`, `search`                                                        |
| helperText         |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                                                                |
| helperTextPosition |          | `true`   | `string`   | Position of helper text. Either above the input field(`top`) or below it(`bottom`). Default is `top`                                               |
| label              |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                         |
| validate           |          | `true`   | `function` | A validitor function that validates the value currently in the field. Signature is `(value) => boolean`                                            |
| format             |          | `true`   | `function` | A formatting function that allows you to format the value before it is displayed in the UI input field. Signature is `(value) => formattedValue`   |
| parse              |          | `true`   | `function` | A parsing function that allows you to format the current input value before it is stored in the redux store. Signature is `(value) => parsedValue` |
