/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

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
		helperTextPosition = 'top',
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
			{helperText &&
				helperTextPosition === 'top' && (
					<div className="form-helper">
						<p className="helper-text top">{helperText}</p>
					</div>
				)}

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

			{/* Helper Text */}
			{helperText &&
				helperTextPosition === 'bottom' && (
					<div className="form-helper margin-top-1">
						<p className="helper-text bottom">{helperText}</p>
					</div>
				)}

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
