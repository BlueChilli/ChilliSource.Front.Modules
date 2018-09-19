/** Libraries */
import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { Calendar } from 'react-widgets';
import { Field } from 'redux-form';
import onClickOutside from 'react-onclickoutside';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

/** Initialisation */
// Moment.locale('en-au');
momentLocalizer();
const defaultCurrentDate = new Date();
defaultCurrentDate.setHours(0, 0, 0, 0);

class WidgetsPicker extends React.Component {
	handleClickOutside = () => {
		this.props.onFinish();
	};

	render() {
		const { onFinish, ...remainingAttributes } = this.props;

		return <Calendar footer={false} {...remainingAttributes} />;
	}
}

const InnerPicker = onClickOutside(WidgetsPicker);

class Picker extends React.Component {
	constructor() {
		super();

		this.state = {
			isPickingDate: false,
		};
	}

	pickDate = () =>
		this.setState(prevState => ({
			isPickingDate: true,
		}));

	pickedDate = () => {
		this.setState(prevState => ({
			isPickingDate: false,
		}));
	};

	render() {
		const {
			input,
			label,
			className,
			helperText,
			helperTextPosition = 'top',
			required = false,
			meta: { touched, error },
			...remainingAttributes
		} = this.props;
		const { isPickingDate } = this.state;

		const invalid = touched && error;

		return (
			<FormElementWrapper className={className}>
				{/* Label */}
				{label && (
					<div className="form-label">
						<label>
							{label}
							{required && <span>*</span>}
						</label>
					</div>
				)}

				{/* Helper Text */}
				{helperText &&
					helperTextPosition === 'top' && (
						<div className="form-helper">
							<p className="helper-text top">{helperText}</p>
						</div>
					)}

				{/* Calendar */}
				<div className={`form-input ${invalid && 'error'}`}>
					<svg
						viewBox="0 0 76 84"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						onClick={this.pickDate}>
						<g
							className="icon calendar"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd">
							<path
								d="M54.668,8.668 L54.668,4.5 C54.668,2.1992 56.5313,0.332 58.8321,0.332 C61.1329,0.332 63.0001,2.1992 63.0001,4.5 L63.0001,8.668 C69.9024,8.668 75.5001,14.2618 75.5001,21.168 L75.5001,71.168 C75.5001,78.0703 69.9024,83.668 63.0001,83.668 L13.0001,83.668 C6.0978,83.668 0.5001,78.0703 0.5001,71.168 L0.5001,21.168 C0.5001,14.2618 6.0978,8.668 13.0001,8.668 L13.0001,4.5 C13.0001,2.1992 14.8673,0.332 17.1681,0.332 C19.4689,0.332 21.3322,2.1992 21.3322,4.5 L21.3322,8.668 L54.668,8.668 Z M67.168,25.332 L67.168,29.5 L8.832,29.5 L8.832,71.168 C8.832,73.4688 10.6992,75.3321 13,75.3321 L63,75.3321 C65.3008,75.3321 67.168,73.4688 67.168,71.168 L67.168,25.332 Z M17.168,37.832 L33.832,37.832 L33.832,54.5 L17.168,54.5 L17.168,37.832 Z"
								id="Shape"
								fillRule="nonzero"
							/>
						</g>
					</svg>

					<input
						readOnly
						onClick={this.pickDate}
						placeholder="Choose a date"
						value={input.value}
						style={{ cursor: 'pointer', color: '#d8d8d8d' }}
					/>
					{isPickingDate && (
						<InnerPicker
							defaultCurrentDate={input.value ? new Date(input.value) : defaultCurrentDate}
							onChange={data => {
								input.onChange(data);
								this.pickedDate();
							}}
							{...remainingAttributes}
							onFinish={this.pickedDate}
						/>
					)}
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
	}
}

class CalendarPicker extends React.Component {
	parseSelectedDate = value => {
		if (!value) {
			return null;
		}

		return Moment(value).toISOString();
	};

	defaultFormatter = value => {
		if (!value || value === null) {
			return '';
		}

		return Moment(value).format('MMMM DD, YYYY');
	};

	isRequired = value => {
		const { required = false } = this.props;

		if (required) {
			return value ? undefined : 'Required';
		}

		return undefined;
	};

	render() {
		return (
			<Field
				format={this.defaultFormatter}
				validate={this.isRequired}
				parse={this.parseSelectedDate}
				{...this.props}
				component={Picker}
			/>
		);
	}
}

export default CalendarPicker;
