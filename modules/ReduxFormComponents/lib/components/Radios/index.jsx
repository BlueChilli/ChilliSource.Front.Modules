/** Libraries */
import React from 'react';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';

/** Components */
import Radio from '../Radio';

class Radios extends React.Component {
	getFormattedOptions = () => {
		const { options } = this.props;

		return options
			.map(item => {
				if (typeof item === 'string') {
					return {
						label: item,
						value: item,
					};
				}

				if (typeof item === 'object') {
					if (item.value && item.label) {
						return item;
					} else if (item.label) {
						return {
							label: item.label,
							value: item.label,
						};
					} else if (item.value) {
						return {
							label: item.value,
							value: item.value,
						};
					} else {
						return 'delete';
					}
				}

				return 'delete';
			})
			.filter(item => item !== 'delete');
	};

	isOptionWidthValid = () => {
		const { optionWidth } = this.props;

		if (
			optionWidth &&
			typeof optionWidth === 'number' &&
			optionWidth % 10 === 0 &&
			optionWidth > 0 &&
			optionWidth <= 100
		) {
			return true;
		}

		return false;
	};

	render() {
		const {
			name,
			className,
			label,
			helperText,
			position,
			flow,
			optionWidth,
			required = false,
		} = this.props;

		return (
			<FormElementWrapper className={className}>
				{/* Label */}
				{label && (
					<div className="form-label">
						<label>{label}</label>
					</div>
				)}

				{/* Helper Text */}
				{helperText && (
					<div className="form-helper">
						<p className="helper-text">{helperText}</p>
					</div>
				)}

				{/* Radios */}
				<div
					className={`radios flex ${position === 'vertical' ? 'col' : ''} ${
						flow && flow === 'wrap' ? 'wrap' : ''
					}`}>
					{this.getFormattedOptions().map((option, index) => {
						return (
							<Radio
								name={name}
								className={this.isOptionWidthValid() ? `width-${optionWidth}` : ''}
								key={`${name}-${index}`}
								label={option.label}
								value={option.value}
								required={required}
							/>
						);
					})}
				</div>
			</FormElementWrapper>
		);
	}
}

export default Radios;
