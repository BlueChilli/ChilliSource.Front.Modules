/** Libraries */
import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { Calendar } from 'react-widgets';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

/** Initialisation */
Moment.locale('en');
momentLocalizer();

const renderPicker = field => {
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

			{/* Calendar */}
			<div className={`form-input ${invalid && 'error'}`}>
				<Calendar defaultValue={new Date()} onChange={input.onChange} {...remainingAttributes} />
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

class CalendarPicker extends React.Component {
	render() {
		return <Field {...this.props} component={renderPicker} />;
	}
}

export default CalendarPicker;
