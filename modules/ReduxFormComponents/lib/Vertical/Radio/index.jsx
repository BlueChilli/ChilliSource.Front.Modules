/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

/** Radio */
const renderRadio = field => {
	const {
		input,
		label,
		className,
		meta: { pristine, error },
	} = field;

	const handleChange = event => input.onChange(event);
	const invalid = !pristine && error;

	return (
		<FormElementWrapper className={className}>
			{/* Radio */}
			<div className={`form-input ${invalid && 'error'}`}>
				<input type="radio" {...input} checked={input.checked} onChange={handleChange} />

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

class Radio extends React.Component {
	render() {
		return <Field {...this.props} component={renderRadio} />;
	}
}

export default Radio;
