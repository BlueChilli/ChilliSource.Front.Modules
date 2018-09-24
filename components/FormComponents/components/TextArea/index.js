/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import { Wrapper, Error } from '../../general/';

const renderTextArea = field => {
	const {
		input,
		className,
		meta: { touched, error },
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

	const invalid = touched && error;

	return (
		<Wrapper className={className}>
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
			<Error invalid={invalid} error={error} />
		</Wrapper>
	);
};

class TextArea extends React.Component {
	render() {
		return <Field {...this.props} component={renderTextArea} />;
	}
}

export default TextArea;
