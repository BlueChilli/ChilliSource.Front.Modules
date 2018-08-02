# TextArea

The `TextArea` component is a multi line input field that allows the user to enter some text. It supports all the props that the `HTMLTextAreaElement` supports and a few others.

## Usage

- Basic

```js
<TextArea name="demoTextArea" label="Multi Line Input" />
```

<br />

- Few additional basic props

```diff
<TextArea
  name="demoTextArea"
  label="Multi Line Input"
+ placeholder="Enter multi-line text here"
+ className="margin-top-2"
+ helperText="You can enter multi-line text here"
/>
```

## Properties

| Property    | Required | Optional | Type       | Description                                                                                                                                        |
| ----------- | -------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | `true`   |          | `string`   | The unique name assigned to the field                                                                                                              |
| className   |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                                                            |
| placeholder |          | `true`   | `string`   | Text shown when the field has no value                                                                                                             |
| helperText  |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                                                                |
| label       |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                         |
| validate    |          | `true`   | `function` | A validitor function that validates the value currently in the field. Signature is `(value) => boolean`                                            |
| format      |          | `true`   | `function` | A formatting function that allows you to format the value before it is displayed in the UI input field. Signature is `(value) => formattedValue`   |
| parse       |          | `true`   | `function` | A parsing function that allows you to format the current input value before it is stored in the redux store. Signature is `(value) => parsedValue` |
| rows        |          | `true`   | `number`   | The initial number of rows to render the field with. Default is four(4) rows                                                                       |
| disabled    |          | `true`   | `boolean`  | Whether or not this field is `disabled` for user input                                                                                             |
| required    |          | `true`   | `boolean`  | Whether or not this field is required from the user                                                                                                |
| wrap        |          | `true`   | `string`   | Controls the wrapping behaviour of text inside the field. Can be set to either `hard` or `soft`                                                    |
| resize      |          | `true`   | `string`   | Controls the resizing behaviour of the field. Can be set to `none`, `both`, `horizontal`, `vertical`, `initial`, `inherit`                         |
