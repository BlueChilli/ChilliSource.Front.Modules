import React from 'react';
import createStore from './createStore';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { action } from '@storybook/addon-actions';
import './storybook.css';
import { SubmitButton } from '../../modules/ReduxFormComponents/lib/General/SubmitButton';

let PristineForm = props => {
	const { handleSubmit, story } = props;
	return (
		<form onSubmit={handleSubmit}>
			{story}
			<SubmitButton value="Submit" {...props} />
		</form>
	);
};

let PopForm = props => {
	const { handleSubmit, story } = props;
	return (
		<form onSubmit={handleSubmit}>
			{story}
			<SubmitButton value="Submit" {...props} />
		</form>
	);
};

let NoSubmitForm = props => <form>{props.story}</form>;

const mstp = state => {
	return {
		initialValues: state.stateStack,
	};
};

PristineForm = reduxForm({ form: 'pristine' })(PristineForm);

PopForm = compose(
	connect(mstp),
	reduxForm({ form: 'pop' })
)(PopForm);

NoSubmitForm = reduxForm({ form: 'demo' })(NoSubmitForm);

const ReduxFormProviderDecorator = ({ story }) => (
	<Provider store={createStore}>
		<div>
			<div className="sb-title">No initialValues</div>
			<div className="width-800">
				<PristineForm
					story={story}
					onSubmit={(payload, other2, other3) => {
						action('submitted')(payload);
					}}
				/>
			</div>

			<div className="sb-title">initialValues Populated</div>
			<div className="width-800">
				<PopForm
					story={story}
					onSubmit={payload => {
						action('submitted')(payload);
					}}
				/>
			</div>
		</div>
	</Provider>
);

const DemoFormDecorator = ({ story }) => (
	<Provider store={createStore}>
		<NoSubmitForm story={story} />
	</Provider>
);

export { ReduxFormProviderDecorator, DemoFormDecorator };
