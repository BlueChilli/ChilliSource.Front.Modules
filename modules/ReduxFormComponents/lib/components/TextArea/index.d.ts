import React from 'react';
import { Validator, Formatter, Parser, EventWithDataHandler } from 'redux-form';

interface TextAreaProps {
	name: string;
	label?: string;
	helperText?: string;
	className?: string;
	rows?: number;
	disabled?: boolean;
	maxLength?: number;
	placeholder?: string;
	required?: boolean;
	wrap: 'hard' | 'soft';
	resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
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

export default class TextArea extends React.Component<TextAreaProps> {}
