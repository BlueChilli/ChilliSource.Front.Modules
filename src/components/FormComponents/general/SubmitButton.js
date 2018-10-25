/** Libraries */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

/** Helpers */
const Spinner = ({ valueSubmitting }) => (
	<span>
		<FontAwesomeIcon icon={faSpinner} spin />
		<span style={{ marginLeft: '8px' }}>{valueSubmitting || 'Submitting'}</span>
	</span>
);

/**
 * @class SubmitButton
 * @augments React.Component<{}>
 */
class SubmitButton extends React.Component {
	render() {
		const {
			initialValues,
			valueEditing,
			value,
			submitting,
			valueSubmitting,
			asyncValidating,
			invalid,
		} = this.props;

		const buttonText = initialValues
			? valueEditing
				? valueEditing
				: 'Submit'
			: value
				? value
				: 'Submit';

		return (
			<div className="form-element">
				<button type="submit" disabled={asyncValidating || submitting || invalid}>
					{!submitting ? buttonText : <Spinner valueSubmitting={valueSubmitting} />}
				</button>
			</div>
		);
	}
}

export default SubmitButton;
