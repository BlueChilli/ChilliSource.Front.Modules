/** Libraries */
import React from 'react';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

const suppressReturn = event => {
	if (event.keyCode === 13) {
		event.preventDefault();
		event.stopPropagation();
	}
};

const getLabel = (label = undefined, required, moreInfo = undefined) => {
	if (moreInfo) {
		if (label) {
			return (
				<div className="form-label flex between">
					<label>
						{label}
						{required && <span>*</span>}
					</label>

					<a href={moreInfo.link} target="_blank" className="link" rel="noopener noreferrer">
						{moreInfo.title}
					</a>
				</div>
			);
		}

		return (
			<div className="form-label flex between">
				<a href={moreInfo.link} target="_blank" className="link" rel="noopener noreferrer">
					{moreInfo.title}
				</a>
			</div>
		);
	}

	if (label) {
		return (
			<div className="form-label">
				<label>
					{label}
					{required && <span>*</span>}
				</label>
			</div>
		);
	}

	return <noscript />;
};

/** Input */
const renderInputField = field => {
	const {
		input,
		meta: { error, touched },
		type = 'text',
		required = false,
		label,
		helperText,
		helperTextPosition = 'top',
		className,
		moreInfo,
		...remainingAttributes
	} = field;

	const invalid = touched && error;

	return (
		<FormElementWrapper className={className} _id="fe-textfield">
			{/* Label */}
			{getLabel(label, required, moreInfo)}

			{/* Helper Text */}
			{helperText &&
				helperTextPosition === 'top' && (
					<div className="form-helper">
						<p className="helper-text top">{helperText}</p>
					</div>
				)}

			{/* Input */}
			<div className={`form-input ${invalid && 'error'}`}>
				<input
					{...input}
					type={type}
					required={required}
					onKeyDown={suppressReturn}
					{...remainingAttributes}
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
		</FormElementWrapper>
	);
};

class TextField extends React.Component {
	isRequired = value => {
		const { required = false } = this.props;

		if (required) {
			return value ? undefined : 'Required';
		}

		return undefined;
	};

	render() {
		return <Field validate={this.isRequired} {...this.props} component={renderInputField} />;
	}
}

export default TextField;
