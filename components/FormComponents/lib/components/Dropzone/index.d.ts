import React from 'react';

interface DropzoneProps {
	name: string;
	placeholder?: string;
	label: string;
	className?: string;
	helperText?: string;
	/**
	 * The place where the helper text appears.
	 * top : Above the input field
	 * bottom : Below the input field
	 */
	helperTextPosition?: 'top' | 'bottom';
	/**
	 * Formats the value from the Redux store to be displayed
	 * in the field input. Common use cases are to format Numbers
	 * into currencies or Dates into a localized date format.
	 *
	 * Refer to the docs for redux-form
	 */
	format?: Formatter | null;
	parse?: Parser;
	validate?: Validator;
	/**
	 * If true, allows the user to upload multiple
	 * files instead of just one. No previews
	 * will be shown when true.
	 */
	multiple?: boolean;
	disabled?: boolean;
}

export default class Dropzone extends React.Component<DropzoneProps> {}
