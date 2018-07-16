/** Libraries */
import React from 'react';
import { storiesOf } from '@storybook/react';

/** Components */
import TextField from '../modules/ReduxFormComponents/lib/components/TextField/';
import Radio from '../modules/ReduxFormComponents/lib/components/Radio';
import Radios from '../modules/ReduxFormComponents/lib/components/Radios';
import Checkbox from '../modules/ReduxFormComponents/lib/components/Checkbox';
import Checkboxes from '../modules/ReduxFormComponents/lib/components/Checkboxes';
import CalendarPicker from '../modules/ReduxFormComponents/lib/components/CalendarPicker';
import Select from '../modules/ReduxFormComponents/lib/components/Select/';

import { DemoFormDecorator } from './helpers/';

import 'react-widgets/dist/css/react-widgets.css';
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
					label="Single Line Input"
					name="demoTextField"
					helperText="This is some helper text"
					className="margin-top-2"
				/>

				{/* Radio */}
				<Radio name="demoRadio" className="margin-top-2" label="Single Radio" />

				{/* Radios - Horizontal */}
				<Radios
					name="demoRadiosHorizontal"
					className="margin-top-2"
					options={['Red', 'Green', 'Blue', 'Yellow', 'Violet', 'Pink']}
					flow="wrap"
					label="Horizontal Radios"
				/>

				{/* Radios - Vertical */}
				<Radios
					name="demoRadiosVertical"
					className="margin-top-2"
					position="vertical"
					options={['Red', 'Green', 'Blue']}
					label="Vertical Radios"
				/>

				{/* Checkbox */}
				<Checkbox name="demoCheckbox" className="margin-top-2" label="Single Checkbox" />

				{/* Checkboxes - Horizontal */}
				<Checkboxes
					name="demoCheckboxesHorizontal"
					className="margin-top-2"
					label="Horizontal Checkboxes"
					options={['Red', 'Green', 'Blue']}
				/>

				{/* Checkboxes - Vertical */}
				<Checkboxes
					name="demoCheckboxesVertical"
					className="margin-top-2"
					label="Vertical Checkboxes"
					position="vertical"
					options={['Red', 'Green', 'Blue']}
				/>

				{/* DatePicker */}
				<CalendarPicker
					name="demoCalendarPicker"
					className="margin-top-2"
					label="Calendar Picker"
					helperText="This is a calendar date picker"
				/>

				{/* DatePicker */}
				<Select
					name="demoSelect"
					className="margin-top-2"
					label="Select - Single Value"
					helperText="This is a dropdown selector"
					data={['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']}
				/>
			</React.Fragment>
		);
	});
