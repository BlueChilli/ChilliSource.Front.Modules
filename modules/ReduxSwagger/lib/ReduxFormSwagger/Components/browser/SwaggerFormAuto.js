import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
	getBodyParamsFromOperation,
	getByOperationId,
	getSummaryArrayByOperationId,
	getFormDataParamsFromOperation,
} from '../data/swaggerReaderUtils';
import { getFieldDataType } from '../../data/helpers';
import TextField from '../../../../ReduxFormComponents/lib/Vertical/TextField';
import Password from '../Components/Vertical/Password/Password';
import { SubmitButton } from '../Components/General/SubmitButton';
import { apiCreator } from '../data/apiCreators';

class SwaggerForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { summary: [] };
	}

	componentWillMount() {
		this.setState({ summary: getSummaryArrayByOperationId(this.props.id) });
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				{this.state.summary.map(data => {
					return <SwaggerField data={data} />;
				})}
				<SubmitButton value="Submit" {...this.props} />
			</form>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		form: props.id,
		onSubmit: (payload, dispatch, foo) => {
			//console.log("props", props);
			//console.log("foo", foo);
			//console.log("onSub", payload);

			if (props.onSubmit) {
				props.onSubmit(payload, dispatch, foo);
			}

			const whatever = apiCreator(props.id, { body: payload });

			dispatch({
				type: '@@bcswagger/FORMSUBMITTED',
				payload: {
					data: payload,
					id: props.id,
				},
			});
		},
	};
}

export default compose(
	connect(mapStateToProps),
	reduxForm({ enableReinitialize: true })
)(SwaggerForm); //

/*
      <Field label="First Name" name="firstName" component={TextField}/>
      <Field label="Birthday" name="birthday" dateFormat="DD/MM/YYYY" component={DatePicker} validate={required}/>

      <Field label="I am awesome" name="isAwesome" component={SimpleCheck}/>
      <Field label="Choose some fruit" name="shoppingBasket" component={CheckArrayInline} options={genericOptions1}/>
      <Field label="Preferred Fruit" name="preferedFruit" component={Radio} options={genericOptions1}/>
 */

const initialValues = {
	firstName: 'Mick',
	lastName: 'Rippon',
};

const SwaggerField = ({ data }) => {
	const fieldType = getFieldDataType(data);
	const { title, name, type } = data;
	//console.log("data", data);
	switch (fieldType) {
		case 'Text':
			return <Field label={title} name={name} component={TextField} />;
		case 'Password':
			return <Field label={title} name={name} component={Password} />;
		default:
			return <Field label={title} name={name} component={TextField} />;
	}
};
