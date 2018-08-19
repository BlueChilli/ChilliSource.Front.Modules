/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

const renderTextArea = field => {
	const {
		input,
		className,
		meta: { pristine, error },
		placeholder,
		label,
		helperText,
		helperTextPosition = 'top',
		maxLength,
		disabled,
		rows = 4,
		wrap,
		required,
		resize = 'none',
	} = field;

	const invalid = !pristine && error;

	return (
		<FormElementWrapper className={className}>
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

			{/* TextArea */}
			<div className={`form-input ${resize} ${invalid && 'error'}`}>
				<textarea
					{...input}
					rows={rows}
					placeholder={placeholder}
					maxLength={maxLength}
					disabled={disabled}
					wrap={wrap}
					required={required}
					style={{ resize }}
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

class TextArea extends React.Component {
	render() {
		return <Field {...this.props} component={renderTextArea} />;
	}
}

export default TextArea;
