/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import { Wrapper, Error } from '../../general/';

/** Radio */
const renderRadio = field => {
	const {
		input,
		label,
		className,
		required,
		meta: { touched, error },
	} = field;

	const handleChange = event => input.onChange(event);
	const invalid = touched && error;

	return (
		<Wrapper className={className}>
			{/* Radio */}
			<div className={`form-input ${invalid && 'error'}`}>
				<input
					type="radio"
					{...input}
					required={required}
					checked={input.checked}
					onChange={handleChange}
				/>

				{label && <label htmlFor={input.name}>{label}</label>}
			</div>

			{/* Error */}
			<Error invalid={invalid} error={error} />
		</Wrapper>
	);
};

class Radio extends React.Component {
	render() {
		return <Field type="radio" {...this.props} component={renderRadio} />;
	}
}

export default Radio;
