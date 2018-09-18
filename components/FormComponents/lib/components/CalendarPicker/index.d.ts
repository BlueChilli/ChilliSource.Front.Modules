import React from 'react';

type View = 'month' | 'year' | 'decade' | 'century';

interface CalendarPickerProps {
	name: string;
	label?: string;
	helperText?: string;
	/**
	 * The place where the helper text appears.
	 * top : Above the input field
	 * bottom : Below the input field
	 */
	helperTextPosition?: 'top' | 'bottom';
	className?: string;
	/**
	 * The current selected date, should be a Date object or null.
	 */
	value?: Date;
	/**
	 * Default value.
	 */
	defaultValue?: Date;
	/**
	 * Change event Handler that is called when the value is changed. The handler is called with
	 * the Date object
	 */
	onChange?: (date?: Date) => void;
	/**
	 * The minimum date that the Calendar can navigate from.
	 */
	min?: Date;
	/**
	 * The maximum date that the Calendar can navigate to.
	 */
	max?: Date;
	/**
	 * Default current date at which the calendar opens. If none is provided, opens at today's
	 * date or the value date (if any).
	 * @default Date()
	 */
	currentDate?: Date;
	/**
	 * Show or hide the Calendar footer.
	 * @default false
	 */
	footer?: boolean;
	/**
	 * Provide a custom component to render the days of the month.
	 * The Component is provided the following props
	 * - date: a Date object for the day of the month to render
	 * - label: a formatted String of the date to render. To adjust the format of the label
	 *          string use the dateFormat prop, listed below.
	 */
	dayComponent?: (date: Date, label: string) => React.ReactType;
	/**
	 * The starting and lowest level view the calendar can navigate down to.
	 * @enum "month" "year" "decade" "century"
	 */
	initialView?: View;
	/**
	 * The highest level view the calendar can navigate up to. This value should be higher than
	 * initialView
	 * @enum "month" "year" "decade" "century"
	 */
	finalView?: View;
	/**
	 * A formatter for the header button of the month view
	 */
	headerFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for the Calendar footer, formats Today's Date as a string.
	 */
	footerFormat?: string | ((day: Date) => string);
	/**
	 * A formatter calendar days of the week, the default formats each day as a Narrow name:
	 * "Mo", "Tu", etc.
	 */
	dayFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for day of the month.
	 */
	dateFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for month name.
	 */
	monthFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for the year.
	 */
	yearFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for decade, the default formats the first and last year of the decade like:
	 * 2000 - 2009.
	 */
	decadeFormat?: string | ((day: Date) => string);
	/**
	 * A formatter for century, the default formats the first and last year of the century like:
	 * 1900 - 1999.
	 */
	centuryFormat?: string | ((day: Date) => string);
	/**
	 * Set a unique starting view
	 */
	defaultView?: View;
}

export default class CalendarPicker extends React.Component<CalendarPickerProps> {}
