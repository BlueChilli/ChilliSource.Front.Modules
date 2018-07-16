import React from 'react';

interface CheckboxesProps {
	name: string;
	className?: string;
	options: string[] | { label: string; value: string | number }[];
	label?: string;
	required?: boolean;
	helperText?: string;
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

export default class Checkboxes extends React.Component<CheckboxesProps> {}
