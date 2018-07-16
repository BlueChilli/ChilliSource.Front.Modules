# Radio

The `Radio` component is a one-click or one-tap choice field that allows the user to select a value. Once selected, it can be deselected. It supports most of the properties of the HTML `<input type="radio" />` field and a few others.

| Property   | Required | Optional | Type       | Description                                                                                                                                        |
| ---------- | -------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | `true`   |          | `string`   | The unique name assigned to the field                                                                                                              |
| className  |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                                                            |
| label      |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                         |
| helperText |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                                                                |
| validate   |          | `true`   | `function` | A validitor function that validates the value currently in the field. Signature is `(value) => boolean`                                            |
| format     |          | `true`   | `function` | A formatting function that allows you to format the value before it is displayed in the UI input field. Signature is `(value) => formattedValue`   |
| parse      |          | `true`   | `function` | A parsing function that allows you to format the current input value before it is stored in the redux store. Signature is `(value) => parsedValue` |
| required   |          | `true`   | `boolean`  | A `boolean` value indicating whether or not a user is required to answer this field or not                                                         |
| value      |          | `true`   | any        | This is value that is stored in the redux state when user selects the option. If not provided, `label` is used for this.                           |
