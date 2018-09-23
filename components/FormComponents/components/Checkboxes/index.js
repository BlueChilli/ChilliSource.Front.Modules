/** Libraries */
import React from 'react';
import kebabCase from 'lodash/kebabCase';

/** Components */
import { Wrapper } from '../../general/';
import Checkbox from '../Checkbox';

class Checkboxes extends React.Component {
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
			helperTextPosition = 'top',
			position,
			flow,
			optionWidth,
			icons,
		} = this.props;

		return (
			<Wrapper className={className}>
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

				{/* Checkboxes */}
				<div
					className={`checkboxes flex ${position === 'vertical' ? 'col' : ''} ${
						flow && flow === 'wrap' ? 'wrap' : ''
					}`}>
					{this.getFormattedOptions().map((option, index) => {
						const checkboxProps = {
							name: `${name}.${kebabCase(option.value)}`,
							className: this.isOptionWidthValid() ? `width-${optionWidth}` : '',
							key: `${name}-${index}`,
							label: option.label,
							value: option.value,
						};

						if (icons) {
							return <Checkbox {...checkboxProps} icons={icons[index]} />;
						}

						return <Checkbox {...checkboxProps} />;
					})}
				</div>

				{/* Helper Text */}
				{helperText &&
					helperTextPosition === 'bottom' && (
						<div className="form-helper margin-top-1">
							<p className="helper-text bottom">{helperText}</p>
						</div>
					)}
			</Wrapper>
		);
	}
}

export default Checkboxes;
