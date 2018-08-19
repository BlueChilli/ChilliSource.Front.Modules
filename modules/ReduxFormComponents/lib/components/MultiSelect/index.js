/** Libraries */
import React from 'react';
import { Field } from 'redux-form';
import { Multiselect } from 'react-widgets';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

const renderMultiSelect = field => {
	const {
		input,
		className,
		label,
		helperText,
		helperTextPosition = 'top',
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
			{helperText &&
				helperTextPosition === 'top' && (
					<div className="form-helper">
						<p className="helper-text top">{helperText}</p>
					</div>
				)}

			{/* Multiselect */}
			<div className={`form-input ${invalid && 'error'}`}>
				<Multiselect {...remainingAttributes} onChange={input.onChange} />
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

class MultiSelect extends React.Component {
	render() {
		return <Field {...this.props} component={renderMultiSelect} />;
	}
}

export default MultiSelect;
