/** Libraries */
import React from 'react';
import { DropdownList } from 'react-widgets';
import { Field } from 'redux-form';

/** Components */
import { Wrapper, Error } from '../../general/';

const renderSelect = field => {
	const {
		input,
		label,
		className,
		helperText,
		helperTextPosition = 'top',
		meta: { touched, error },
		...remainingAttributes
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

			{/* Select */}
			<div className={`form-input ${invalid && 'error'}`}>
				<DropdownList {...remainingAttributes} value={input.value} onChange={input.onChange} />
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

class Select extends React.Component {
	render() {
		return <Field {...this.props} component={renderSelect} />;
	}
}

export default Select;
