/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

const suppressReturn = event => {
	if (event.keyCode === 13) {
		event.preventDefault();
		event.stopPropagation();
	}
};

/** Input */
const renderInputField = field => {
	const {
		input,
		meta: { error, pristine },
		placeholder,
		type = 'text',
		label,
		helperText,
		className,
		autoFocus = false,
		required = false,
		disabled = false,
	} = field;

	const invalid = !pristine && error;

	return (
		<FormElementWrapper className={className} _id="fe-textfield">
			{/* Label */}
			{label && (
				<div className="form-label">
					<label>{label}</label>
				</div>
			)}

			{/* Helper Text */}
			{helperText && <div className="form-helper">{helperText}</div>}

			{/* Input */}
			<div className={`form-input ${invalid && 'error'}`}>
				<input
					{...input}
					type={type}
					placeholder={placeholder}
					autoFocus={autoFocus}
					required={required}
					disabled={disabled}
					onKeyDown={suppressReturn}
				/>
			</div>

			{/* Error */}
			{invalid && (
				<div className="form-error">
					<Error invalid={invalid}>{error}</Error>
				</div>
			)}
		</FormElementWrapper>
	);
};

class TextField extends React.Component {
	render() {
		return <Field {...this.props} component={renderInputField} />;
	}
}

export default TextField;
