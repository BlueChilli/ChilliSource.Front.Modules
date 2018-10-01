import React, { FocusEvent } from 'react';
import { Validator, Formatter, Parser, EventWithDataHandler } from 'redux-form';

export = FormComponents;
export as namespace FormComponents;

declare namespace FormComponents {
	/** Interfaces */
	interface GeneralFieldProps {
		/**
		 * Small helper text to display below the label or the field
		 * to assist the user in completing the field
		 */
		helperText?: string;
		/**
		 * The place where the helper text appears.
		 * top : Above the input field and below the label
		 * bottom : Below the input field
		 */
		helperTextPosition?: 'top' | 'bottom';
		label?: string;
		name: string;
		id?: string;
		className?: string;
		required?: boolean;
		disabled?: boolean;
	}

	interface ExtendedGeneralFieldProps extends GeneralFieldProps {
		/**
		 * Allows you to to provide a field-level validation rule. The
		 * function is given the fields current value, all other form
		 * values, the props passed to the form, and the name of field
		 * currently being validated. If the field is valid it should
		 * return undefined. If the field is invalid it should return
		 * an error (usually, but not necessarily, a String). Note: if
		 * the validate prop changes the field will be re-registered.
		 */
		validate?: Validator;
		/**
		 * Formats the value from the Redux store to be displayed
		 * in the field input. Common use cases are to format Numbers
		 * into currencies or Dates into a localized date format.
		 *
		 * Refer to the docs for redux-form
		 */
		format?: Formatter | null;
		/**
		 * Parses the value given from the field input component to
		 * the type that you want stored in the Redux store. Common
		 * use cases are to parse currencies into Numbers or localized
		 * date formats into Dates.
		 */
		parse?: Parser;
	}

	interface GeneralSelectProps {
		/**
		 * Provide an array of possible values for the DropdownList. If an array of objects is
		 * provided you should use the valueField and textField props, to specify which object
		 * properties comprise the value field (such as an id) and the field used to label the item.
		 */
		data?: any[];
		/**
		 * Delay
		 * @default 250
		 */
		delay?: number;
		/**
		 * A dataItem field name for uniquely identifying items in the data list. A valueField is
		 * required when the value prop is not itself a dataItem. A valueField is useful when
		 * specifying the selected item, by its id instead of using the model as the value.
		 * When a valueField is not provided, the DropdownList will use strict equality checks (===)
		 * to locate the value in the data list.
		 */
		valueField?: string;
		/**
		 * Specify which data item field to display in the DropdownList and selected item.
		 * ThetextFieldprop may also also used as to find an item in the list as you type. Providing
		 * an accessor function allows for computed text values
		 */
		textField?: string | ((dataItem: any) => string);
		/**
		 * Text to display when the value is empty.
		 */
		placeholder?: string;
		/**
		 * The string value of the current search being typed into the DropdownList. When unset
		 * (undefined) the DropdownList will handle the filtering internally. The defaultSearchTerm
		 * prop can be used to set an initialization value for uncontrolled widgets. searchTerm is
		 * only relevant when the filter prop is set.
		 */
		searchTerm?: string;
		/**
		 * Determines how to group the DropdownList. Providing a string will group the data array by
		 * that property. You can also provide a function which should return the group value.
		 */
		groupBy?: string | ((dataItem: any) => any);
		/**
		 * This component is used to render each option group, when groupBy is specified. By default
		 * the groupBy value will be used.
		 */
		groupComponent?: React.ReactType;
		/**
		 * Called when the value of the text box changes either from typing or a pasted value.
		 * onSearch should be used when the searchTerm prop is set.
		 */
		onSearch?: (
			searchTerm: string,
			metadata: {
				action: 'clear' | 'input';
				lastSearchTerm?: string;
				originalEvent?: any;
			}
		) => void;
		/**
		 * Whether or not the DropdownList is open. When unset (undefined) the DropdownList will
		 * handle the opening and closing internally.
		 */
		open?: boolean;
		/**
		 * The defaultOpen prop can be used to set an
		 * initialization value for uncontrolled widgets.
		 */
		defaultOpen?: boolean;
		/**
		 * Called when the DropdownList is about to open or close. onToggle should be used when the
		 * open prop is set otherwise the widget open buttons won't work.
		 */
		onToggle?: (isOpen: boolean) => void;
		/**
		 * Specify a filtering method used to reduce the items in the dropdown as you type.
		 * There are a few built-in filtering methods that can be specified by passing the String name.
		 * To handle custom filtering techniques provide a function that returns true or false
		 * for each passed in item (analogous to the array.filter builtin)
		 * @enum false "startsWith" "endsWith" "contains"
		 */
		filter?:
			| boolean
			| 'startsWith'
			| 'endsWith'
			| 'contains'
			| ((dataItem: any, str: string) => boolean);
		/**
		 * Use in conjunction with the filter prop. Filter the list without regard for case. This
		 * only applies to non function values for filter
		 * @default false
		 */
		caseSensitive?: boolean;
		/**
		 * Use in conjunction with the filter prop. Start filtering the list only after the value
		 * has reached a minimum length.
		 * @default 1
		 */
		minLength?: number;
		/**
		 * The speed, in milliseconds, of the dropdown animation.
		 * @default 250
		 */
		duration?: number;

		listComponent?: React.ReactType | string;
		/**
		 * An object of props that is passed directly to the underlying List component.
		 */
		listProps?: object;
		/**
		 * This component is used to render each possible item in the DropdownList. The default
		 * component renders the text of the selected item (specified by textfield)
		 */
		itemComponent?: React.ReactType | string;
		/**
		 * Change the opening direction of the popup
		 */
		dropUp?: boolean;
	}

	interface TextFieldProps extends ExtendedGeneralFieldProps {
		placeholder?: string;
		onFocus?: EventWithDataHandler<FocusEvent<HTMLInputElement>>;
		onBlur?: EventWithDataHandler<FocusEvent<HTMLInputElement>>;
		type?: 'url' | 'email' | 'text' | 'password' | 'number' | 'tel' | 'hidden' | 'search';
	}

	interface TextAreaProps extends ExtendedGeneralFieldProps {
		wrap: 'hard' | 'soft';
		resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
		rows?: number;
	}

	interface SelectProps extends ExtendedGeneralFieldProps, GeneralSelectProps {
		/**
		 * This component is used to render the selected value of the DropdownList. The default
		 * component renders the text of the selected item (specified by textfield)
		 */
		valueComponent?: React.ReactType;
	}

	interface MultiSelectProps extends ExtendedGeneralFieldProps, GeneralSelectProps {
		/**
		 * This is used to render the individual selected item
		 * in the list of selected items i.e. tag
		 */
		tagComponent?: React.ReactType | string;
	}

	interface CheckboxProps extends ExtendedGeneralFieldProps {
		value?: string | number;
	}

	interface CheckboxesProps extends ExtendedGeneralFieldProps {
		options: string[] | { label: string; value: string | number }[];
		/**
		 * This is useful only when setting the flow property
		 * to wrap. You can choose how much percent of the
		 * available space the option should occupy.
		 *
		 * If flow is not set or is inline, setting this property
		 * has no effect.
		 */
		optionWidth?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
		/**
		 * Note that if you choose horizontal,
		 * it'll try and fit all the options -
		 * however many - in the available space.
		 *
		 * Set the next option - flow - as wrap
		 * and the options will wrap onto the
		 * next line
		 */
		position?: 'horizontal' | 'vertical';
		flow?: 'wrap' | 'inline';
	}

	interface RadioProps extends ExtendedGeneralFieldProps {
		value?: string | number;
	}

	interface RadiosProps extends ExtendedGeneralFieldProps {
		options: string[] | { label: string; value: string | number }[];
		/**
		 * This is useful only when setting the flow property
		 * to wrap. You can choose how much percent of the
		 * available space the option should occupy.
		 *
		 * If flow is not set or is inline, setting this property
		 * has no effect.
		 */
		optionWidth?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
		/**
		 * Note that if you choose horizontal,
		 * it'll try and fit all the options -
		 * however many - in the available space.
		 *
		 * Set the next option - flow - as wrap
		 * and the options will wrap onto the
		 * next line
		 */
		position?: 'horizontal' | 'vertical';
		flow?: 'wrap' | 'inline';
	}

	type View = 'month' | 'year' | 'decade' | 'century';

	interface CalendarPickerProps extends ExtendedGeneralFieldProps {
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

	interface DropzoneProps extends GeneralFieldProps {
		/**
		 * If true, allows the user to upload multiple
		 * files instead of just one. No previews
		 * will be shown when true.
		 */
		multiple?: boolean;
		/**
		 * The file types allowed
		 * See https://github.com/okonet/attr-accept
		 */
		accept?: string;
		/** Max file size allowed */
		maxSize?: number;
		/** Min file size required */
		minSize?: number;
	}

	/** Components */
	class TextField extends React.Component<TextFieldProps> {}

	class TextArea extends React.Component<TextAreaProps> {}

	class Select extends React.Component<SelectProps> {}

	class MultiSelect extends React.Component<MultiSelectProps> {}

	class Checkbox extends React.Component<CheckboxProps> {}

	class Checkboxes extends React.Component<CheckboxesProps> {}

	class Radio extends React.Component<RadioProps> {}

	class Radios extends React.Component<RadiosProps> {}

	class CalendarPicker extends React.Component<CalendarPickerProps> {}

	class Dropzone extends React.Component<DropzoneProps> {}

	/** Validators */
	class Validators {
		validateEmail: (email?: string) => undefined | string;
		validateConfirmPassword: (confirmPassword: string, allFormValues: any) => undefined | string;
		validateMaximumLength: (maxLength: number) => (value?: string) => undefined | string;
		validateMinimumLength: (minLength: number) => (value?: string) => undefined | string;
		validateRequired: (value?: string) => undefined | string;
		validateValueIsUrlOfType: (
			type: 'HTTP' | 'HTTPS' | 'URI_STANDARD'
		) => (value?: string) => undefined | string;
	}
}
