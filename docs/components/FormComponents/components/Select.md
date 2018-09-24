# Select

The `Select` component provides a drop down selector to select a value amongst a group of values. It supports most of the attributes for the default HTML `select` element and quite a few others.

## Usage

```js
<Select
	name="demoSelect"
	label="Select - Single Value"
	data={['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']}
/>
```

```diff
<Select
  name="demoSelect"
  label="Select - Single Value"
  data={['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']}
+ helperText="This is a dropdown selector"
/>
```

<br />

## Properties

| Property           | Required | Optional | Type       | Description                                                                                                                                                                                                                                                               |
| ------------------ | -------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | `true`   |          | `string`   | The unique name assigned to the field                                                                                                                                                                                                                                     |
| className          |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                                                                                                                                                                                   |
| label              |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                                                                                                                                                |
| required           |          | `true`   | `boolean`  | A `boolean` value indicating whether or not a user is required to answer this field or not                                                                                                                                                                                |
| helperText         |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                                                                                                                                                                                       |
| helperTextPosition |          | `true`   | `string`   | Position of helper text. Either above the input field(`top`) or below it(`bottom`). Default is `top`                                                                                                                                                                      |
| value              |          | `true`   | `any`      | The current value for the field. **Required** if this component is being used as a controlled component                                                                                                                                                                   |
| defaultValue       |          | `true`   | `any`      | The initial value for the field.                                                                                                                                                                                                                                          |
| onChange           |          | `true`   | `function` | Change event Handler that is called when the value is changed. Signature is `(value:any) => void`                                                                                                                                                                         |
| onSelect           |          | `true`   | `function` | This handler fires when an item has been selected from the list. It fires before the onChange handler, and fires regardless of whether the value has actually changed. Signature is `(value:any) => void`                                                                 |
| onKeyDown          |          | `true`   | `function` | The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts. Signature is `(event: KeyboardEvent) => void`                                                                                                            |
| onKeyPress         |          | `true`   | `function` | The native onKeyPress event, called preventDefault will stop any custom behavior. Signature is `(event: KeyboardEvent) => void`                                                                                                                                           |
| data               | `true`   |          | `any[]`    | Provide an array of possible values for the DropdownList. If an array of objects is provided you should use the `valueField` and `textField` props too, to specify which object properties comprise the value field (such as an id) and the field used to label the item. |
| valueField         |          | `true`   | `string`   | A dataItem field name for uniquely identifying items in the data list. A valueField is required when the value prop is not itself a dataItem.                                                                                                                             |
| textField          |          | `true`   | `string`   | Specify which data item field to display in the Multiselect and selected item. The textField prop may also also used as to find an item in the list as you type.                                                                                                          |
| delay              |          | `true`   | `number`   | Default is 250                                                                                                                                                                                                                                                            |
| dropUp             |          | `true`   | `boolean`  | Change the opening direction of the popup                                                                                                                                                                                                                                 |
