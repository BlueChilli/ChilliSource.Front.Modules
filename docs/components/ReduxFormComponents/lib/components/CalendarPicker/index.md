# CalendarPicker

CalendarPicker displays a calendar view that allows the user to choose a exact date, or a part of thereof. We currently **do not** support date range. If you need a range selection, you can use two pickers and enforce your own validation rules or try sourcing another package from `npm` and build your own component.

## Usage

As listed [below](#properties), `CalendarPicker` supports many different properties as well as customisation options.

- Basic(_No customisation_)

```js
<CalendarPicker
	name="demoCalendarPicker"
	label="Calendar Picker"
	helperText="This is a calendar date picker"
/>
```

<br />

- Hiding Header & Footer

```js
<CalendarPicker
	name="demoCalendarPicker"
	className="margin-top-2"
	label="Calendar Picker"
	helperText="This is a calendar date picker"
	footer={false}
	header={false}
/>
```

<br />

- Formatting value for display

```js
<CalendarPicker
	name="demoCalendarPicker"
	className="margin-top-2"
	label="Calendar Picker"
	helperText="This is a calendar date picker"
	format={value => Moment(value).format('MMMM DD, YYYY')}
/>
```

The above display the date value as a ISO8601 string. You can look up [MomentJS docs](https://momentjs.com/docs/) to learn more about formatting dates.

<br />

- Parsing value before being stored in Redux store

```js
<CalendarPicker
	name="demoCalendarPicker"
	className="margin-top-2"
	label="Calendar Picker"
	helperText="This is a calendar date picker"
	parse={value => Moment(value).format('MMMM DD, YYYY')}
/>
```

The above stores the date value as a ISO8601 string in the redux store. You can look up [MomentJS docs](https://momentjs.com/docs/) to learn more about formatting dates.

**Note**: The calendar icon in the picker uses the primary color supplied by the user. Default is #0067FF.
<br />

## Properties

| Property           | Required | Optional | Type                   | Description                                                                                                                                                    |
| ------------------ | -------- | -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | `true`   |          | `string`               | The unique name assigned to the field                                                                                                                          |
| className          |          | `true`   | `string`               | Additional `class`es you'd like to add to the component                                                                                                        |
| label              |          | `true`   | `string`               | The title for this field. It helps the user better understand what is required from them w.r.t. this field                                                     |
| helperText         |          | `true`   | `string`               | Text shown just below the label designed to further user understanding of the field                                                                            |
| helperTextPosition |          | `true`   | `string`               | Position of helper text. Either above the input field(`top`) or below it(`bottom`). Default is `top`                                                           |
| value              |          | `true`   | `Date`                 | **Only** specify if you are using this as a controlled component.                                                                                              |
| defaultValue       |          | `true`   | `Date`                 | An initial value if required by the form                                                                                                                       |
| min                |          | `true`   | `Date`                 | The minimum date that the Calendar can navigate from.                                                                                                          |
| max                |          | `true`   | `Date`                 | The maximum date that the Calendar can navigate to.                                                                                                            |
| currentDate        |          | `true`   | `Date`                 | Default current date at which the calendar opens. If none is provided, opens at today's date or the value date (if any).                                       |
| footer             |          | `true`   | `boolean`              | Show or hide the Calendar footer. Default false                                                                                                                |
| dayComponent       |          | `true`   | `React.ReactType`      | Provide a custom component to render the days of the month.                                                                                                    |
| initialView        |          | `true`   | `string`               | The starting and lowest level view the calendar can navigate down to. Possible values = `month`, `year`, `decade` or `century`                                 |
| finalView          |          | `true`   | `string`               | The highest level view the calendar can navigate up to. This value should be higher than initialView. Possible values = `month`, `year`, `decade` or `century` |
| headerFormat       |          | `true`   | `string` or `function` | A formatter for the header button of the month view. Signature is `string` or `((day: Date) => string)`                                                        |
| footerFormat       |          | `true`   | `string` or `function` | A formatter for the Calendar footer, formats Today's Date as a string. Signature is `string` or `((day: Date) => string)`                                      |
| dayFormat          |          | `true`   | `string` or `function` | A formatter calendar days of the week, the default formats each day as a Narrow name: "Mo", "Tu", etc. Signature is `string` or `((day: Date) => string)`      |
| dateFormat         |          | `true`   | `string` or `function` | A formatter for day of the month. Signature is `string` or `((day: Date) => string)`                                                                           |
| monthFormat        |          | `true`   | `string` or `function` | A formatter for month name. Signature is `string` or `((day: Date) => string)`                                                                                 |
| yearFormat         |          | `true`   | `string` or `function` | A formatter for the year. Signature is `string` or `((day: Date) => string)`                                                                                   |
| decadeFormat       |          | `true`   | `string` or `function` | A formatter for decade, the default formats the first and last year of the decade like: 2000 - 2009. Signature is `string` or `((day: Date) => string)`        |
| centuryFormat      |          | `true`   | `string` or `function` | A formatter for century, the default formats the first and last year of the century like: 1900 - 1999. Signature is `string` or `((day: Date) => string)`      |
| defaultView        |          | `true`   | `string`               | Set a unique starting view. Possible values = `month`, `year`, `decade` or `century`                                                                           |

```

```
