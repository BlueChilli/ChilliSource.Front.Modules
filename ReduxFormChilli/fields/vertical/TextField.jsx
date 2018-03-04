/* eslint-disable */
import React from "react";
import classNames from "classnames";
import Error from "./Error";

export default (props) => {

	const {
		input, name, autoFocus, label, placeholder, type, meta: {
			active, touched, error, dirty, asyncValidating,
		},
	} = props;
	const invalid = touched && error;

	const classes = classNames({
		invalid,
	});

	return (
		<div className="form-element">
			<label>{label || placeholder}</label>
			<div>
				<input
					{...input}
					className={classes}
					autoFocus={autoFocus}
					placeholder={placeholder || label}
					type={type}
				/>
				<Error invalid={invalid}>{error}</Error>
			</div>
		</div>
	);
};