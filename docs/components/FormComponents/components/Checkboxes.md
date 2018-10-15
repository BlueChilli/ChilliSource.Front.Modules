# Checkboxes

The `Checkboxes` component is a group of checkboxes suited for multiple choice selection from a set of options.

## Usage

- Basic(_Horizontal_)

```js
<Checkboxes
	name="demoCheckboxesHorizontal"
	className="margin-top-2"
	label="Horizontal Checkboxes"
	options={['Red', 'Green', 'Blue']}
/>
```

<br />

- Basic(_Vertical_)

```diff
<Checkboxes
  name="demoCheckboxesVertical"
  className="margin-top-2"
  label="Vertical Checkboxes"
  options={['Red', 'Green', 'Blue']}
+ position="vertical"
/>
```

<br />

- Options with values

```js
<Checkboxes
	name="demoCheckboxesHorizontal"
	className="margin-top-2"
	label="Horizontal Checkboxes"
	options={[
		{ label: 'Red', value: '#FF0000' },
		{ label: 'Green', value: '#00FF00' },
		{ label: 'Blue', value: '#0000FF' },
	]}
/>
```

## Properties

| Property           | Required | Optional | Type      | Description                                                                                                                                                                                                                                                                                                                              |
| ------------------ | -------- | -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | `true`   |          | `string`  | The unique name assigned to the field                                                                                                                                                                                                                                                                                                    |
| className          |          | `true`   | `string`  | Additional `class`es you'd like to add to the component                                                                                                                                                                                                                                                                                  |
| label              |          | `true`   | `string`  | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                                                                                                                                                                                                               |
| helperText         |          | `true`   | `string`  | Text shown just below the label designed to further user understanding of the field                                                                                                                                                                                                                                                      |
| helperTextPosition |          | `true`   | `string`  | Position of helper text. Either above the input field(`top`) or below it(`bottom`). Default is `top`                                                                                                                                                                                                                                     |
| required           |          | `true`   | `boolean` | A `boolean` value indicating whether or not a user is required to answer this field or not                                                                                                                                                                                                                                               |
| optionWidth        |          | `true`   | `number`  | This property is only useful when setting the `flow` property as well. You can choose how much percentage of the available space should the an option occupy. If `flow` is not set, this property has no effect. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `100`                                         |
| position           |          | `true`   | `string`  | This controls whether the options are arranged horizontally or vertically. **Note** that if you choose `horizontal` without setting the next property - `flow` - then, the component will try to fit all the options in one line. Even if they intersect on the UI. Set the `flow` property to `wrap` so that the content wraps properly |
| flow               |          | `true`   | `string`  | Controls the wrapping behaviour of the component. Possible values are `inline`(default) and `wrap`. If `wrap` is chosen, the contents gradually flow into the next line like a normal piece of text.                                                                                                                                     |
