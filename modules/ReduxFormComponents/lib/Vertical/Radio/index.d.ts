import React from 'react';

interface RadioProps {
	name: string;
	id?: string;
	className?: string;
	label?: string;
	value?: string | number;
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

export default class Radio extends React.Component<RadioProps> {}
