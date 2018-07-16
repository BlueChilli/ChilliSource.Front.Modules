import React, { FocusEvent } from 'react';
import { Validator, Formatter, Parser, EventWithDataHandler } from 'redux-form';

interface TextFieldProps {
	name: string;
	id?: string;
	className?: string;
	placeholder?: string;
	onFocus?: EventWithDataHandler<FocusEvent<HTMLInputElement>>;
	onBlur?: EventWithDataHandler<FocusEvent<HTMLInputElement>>;
	type?: 'url' | 'email' | 'text' | 'password' | 'number' | 'tel' | 'hidden' | 'search';
	helperText?: string;
	label?: string;
	validate?: Validator;
	/**
	 * Formats the value from the Redux store to be displayed
	 * in the field input. Common use cases are to format Numbers
	 * into currencies or Dates into a localized date format.
	 *
	 * Refer to the docs for redux-form
	 */
	format?: Formatter | null;
	parse?: Parser;
}

export default class TextField extends React.Component<TextFieldProps> {}
