# MultiSelect

The `MultiSelect` component does not have a true equivalent in HTML. The closest is a group of checkboxes which can, technically, do the same job. However having search, filtering and occupying relatively less real estate.

## Usage

```js
<MultiSelect
  name="demoMultiSelect"
  label="Select - Multiple Values"
  placeholder="Select values ..."
  data={[
    'Violet',
    'Indigo',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
    'Purple',
    'Black',
    'White',
    'Peach',
    'Navy',
  ]}
```

<br />

## Properties

| Property     | Required | Optional | Type       | Description                                                                                                                                                                                                                                                               |
| ------------ | -------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | `true`   |          | `string`   | The unique name assigned to the field                                                                                                                                                                                                                                     |
| className    |          | `true`   | `string`   | Additional `class`es you'd like to add to the component                                                                                                                                                                                                                   |
| label        |          | `true`   | `string`   | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                                                                                                                                                |
| required     |          | `true`   | `boolean`  | A `boolean` value indicating whether or not a user is required to answer this field or not                                                                                                                                                                                |
| helperText   |          | `true`   | `string`   | Text shown just below the label designed to further user understanding of the field                                                                                                                                                                                       |
| value        |          | `true`   | `any`      | The current value for the field. **Required** if this component is being used as a controlled component                                                                                                                                                                   |
| defaultValue |          | `true`   | `any`      | The initial value for the field.                                                                                                                                                                                                                                          |
| onChange     |          | `true`   | `function` | Change event Handler that is called when the value is changed. Signature is                                                                                                                                                                                               |
|              |          |          |            | `(dataItems: any[],`                                                                                                                                                                                                                                                      |
|              |          |          |            | `metadata: {`                                                                                                                                                                                                                                                             |
|              |          |          |            | `dataItem: any,`                                                                                                                                                                                                                                                          |
|              |          |          |            | `action: 'insert' | 'remove',`                                                                                                                                                                                                                                            |
|              |          |          |            | `originalEvent?: any`                                                                                                                                                                                                                                                     |
|              |          |          |            | `lastValue?: any[]`                                                                                                                                                                                                                                                       |
|              |          |          |            | `searchTerm?: string`                                                                                                                                                                                                                                                     |
|              |          |          |            | `}) => void`                                                                                                                                                                                                                                                              |
| onSelect     |          | `true`   | `function` | This handler fires when an item has been selected from the list. It fires before the onChange handler, and fires regardless of whether the value has actually changed. Signature is `(value: any, metadata: { originalEvent: any; }) => void`                             |
| onKeyDown    |          | `true`   | `function` | The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts. Signature is `(event: KeyboardEvent) => void`                                                                                                            |
| onKeyPress   |          | `true`   | `function` | The native onKeyPress event, called preventDefault will stop any custom behavior. Signature is `(event: KeyboardEvent) => void`                                                                                                                                           |
| data         | `true`   |          | `any[]`    | Provide an array of possible values for the DropdownList. If an array of objects is provided you should use the `valueField` and `textField` props too, to specify which object properties comprise the value field (such as an id) and the field used to label the item. |
| valueField   |          | `true`   | `string`   | A dataItem field name for uniquely identifying items in the data list. A valueField is required when the value prop is not itself a dataItem.                                                                                                                             |
| textField    |          | `true`   | `string`   | Specify which data item field to display in the Multiselect and selected item. The textField prop may also also used as to find an item in the list as you type.                                                                                                          |
| delay        |          | `true`   | `number`   | Default is 250                                                                                                                                                                                                                                                            |
