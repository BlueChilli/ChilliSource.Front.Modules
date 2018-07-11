/** Libraries */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field, reduxForm } from 'redux-form';

/** Components */
import TextField from '../modules/ReduxFormComponents/lib/Vertical/TextField/';
import Radio from '../modules/ReduxFormComponents/lib/Vertical/Radio';
import Radios from '../modules/ReduxFormComponents/lib/Vertical/Radios';

import { DemoFormDecorator } from './helpers/';

import '../sass-helpers/index.css';

/** Rendering Components */
storiesOf('Style Helpers', module)
	.add('Text', () => {
		return (
			<React.Fragment>
				<h1>Text Styles</h1>

				<br />
				<h1>This is an h1 heading</h1>

				<br />
				<h2>This is an h2 heading</h2>

				<br />
				<h3>This is an h3 heading</h3>

				<br />
				<h4>This is an h4 heading</h4>

				<br />
				<h5>This is an h5 heading</h5>

				<br />
				<h6>This is an h6 heading</h6>

				<br />
				<p>This is a paragraph text</p>
			</React.Fragment>
		);
	})
	.addDecorator(getStory => <DemoFormDecorator story={getStory()} />)
	.add('Forms Components', () => {
		return (
			<React.Fragment>
				<h1 className="margin-bottom-2">Form Components</h1>

				{/* TextField */}
				<TextField
					label="Label"
					name="demoTextField"
					helperText="This is some helper text"
					className="margin-top-2"
				/>

				{/* Radio */}
				<Radio name="demoRadio" className="margin-top-2" label="Label" />

				{/* Radios - Horizontal */}
				<Radios
					name="demoRadios"
					className="margin-top-2"
					options={['Red', 'Green', 'Blue']}
					label="Select a color"
				/>

				{/* Radios - Vertical */}
				<Radios
					name="demoRadios"
					className="margin-top-2"
					position="vertical"
					options={['Red', 'Green', 'Blue']}
					label="Select a color"
				/>
			</React.Fragment>
		);
	});
