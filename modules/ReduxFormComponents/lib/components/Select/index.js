/** Libraries */
import React from 'react';
import { DropdownList } from 'react-widgets';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

const renderSelect = field => {
	const {
		input,
		label,
		className,
		helperText,
		meta: { pristine, error },
		...remainingAttributes
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
			{helperText && <div className="form-helper">{helperText}</div>}

			{/* Select */}
			<div className={`form-input ${invalid && 'error'}`}>
				<DropdownList {...remainingAttributes} onChange={input.onChange} />
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

class Select extends React.Component {
	render() {
		return <Field {...this.props} component={renderSelect} />;
	}
}

export default Select;
