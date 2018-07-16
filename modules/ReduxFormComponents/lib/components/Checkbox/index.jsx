/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

const renderCheckbox = field => {
	const {
		input,
		label,
		className,
		required,
		meta: { pristine, error },
	} = field;

	const handleChange = event => input.onChange(event);

	const invalid = !pristine && error;

	return (
		<FormElementWrapper className={className}>
			{/* Checkbox */}
			<div className={`form-input ${invalid && 'error'}`}>
				<input
					type="checkbox"
					{...input}
					required={required}
					checked={input.checked}
					onChange={handleChange}
				/>

				{label && <label htmlFor={input.name}>{label}</label>}
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

class Checkbox extends React.Component {
	render() {
		return <Field {...this.props} component={renderCheckbox} />;
	}
}

export default Checkbox;
