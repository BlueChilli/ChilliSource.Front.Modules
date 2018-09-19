import React from 'react';
import { Validator, Formatter, Parser } from 'redux-form';

interface RadioProps {
	name: string;
	className?: string;
	label?: string;
	value?: string | number;
	required?: boolean;
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
	 * Parses the value given from the field input component to the
	 * type that you want stored in the Redux store. Common use cases
	 * are to parse currencies into Numbers or localized date formats
	 * into Dates.
	 */
	parse?: Parser;
}

export default class Radio extends React.Component<RadioProps> {}
