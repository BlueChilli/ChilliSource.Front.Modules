/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

const renderCheckbox = field => {
	const {
		input,
		label,
		className,
		required,
		meta: { pristine, error },
		icons,
	} = field;

	const handleChange = event => input.onChange(event);

	const invalid = !pristine && error;

	return (
		<FormElementWrapper className={className}>
			{/* Checkbox */}
			<div className={`form-input ${input.checked ? 'selected' : ''} ${invalid ? 'error' : ''}`}>
				<input
					type="checkbox"
					{...input}
					required={required}
					checked={input.checked}
					onChange={handleChange}
				/>

				{/* icon if provided */}
				{icons && (
					<img
						src={input.checked ? icons.active : icons.default}
						className="option-icon"
						alt="option-icon"
					/>
				)}

				{/* label if provided */}
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
		return <Field type="checkbox" {...this.props} component={renderCheckbox} />;
	}
}

export default Checkbox;
