# Checkbox

The `Checkbox` component is like an on-off switch. A user can repeatedly select and deselect and value chosen is updated in the state. It supports most of the properties of the HTML `<input type="checkbox" />` field and a few others.

| Property  | Required | Optional | Type                 | Description                                                                                                                                        |
| --------- | -------- | -------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `true`   |          | `string`             | The unique name assigned to the field                                                                                                              |
| className |          | `true`   | `string`             | Additional `class`es you'd like to add to the component                                                                                            |
| label     |          | `true`   | `string`             | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                         |
| validate  |          | `true`   | `function`           | A validitor function that validates the value currently in the field. Signature is `(value) => boolean`                                            |
| format    |          | `true`   | `function`           | A formatting function that allows you to format the value before it is displayed in the UI input field. Signature is `(value) => formattedValue`   |
| parse     |          | `true`   | `function`           | A parsing function that allows you to format the current input value before it is stored in the redux store. Signature is `(value) => parsedValue` |
| required  |          | `true`   | `boolean`            | A `boolean` value indicating whether or not a user is required to answer this field or not                                                         |
| value     |          | `true`   | `string` or `number` | This is value that is stored in the redux state when user selects the option. If not provided, `label` is used for this.                           |
