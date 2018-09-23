/** Libraries */
import React from 'react';
import { storiesOf } from '@storybook/react';

/** Components */
import {
	TextField,
	TextArea,
	Radio,
	Radios,
	Checkbox,
	Checkboxes,
	CalendarPicker,
	Select,
	MultiSelect,
} from '../components/FormComponents';

import {} from '../components/FormComponents';
import SwaggerView from '../components/Swagger/View/SwaggerView';

import { DemoFormDecorator } from './helpers/';

import 'react-widgets/dist/css/react-widgets.css';
import '../style-helpers/index.css';

/** Rendering Components */
storiesOf('Style Helpers', module)
	.add('Typography', () => {
		return (
			<React.Fragment>
				<p style={{ fontSize: 36, color: '#0067FF', fontWeight: 700 }}>Typography</p>
				<br />

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

				<br />
				<a href="#" className="link">
					This is a link
				</a>
			</React.Fragment>
		);
	})
	.add('Buttons', () => {
		return (
			<React.Fragment>
				<p style={{ fontSize: 36, color: '#0067FF', fontWeight: 700 }}>Buttons</p>

				<button className="button button-primary margin-top-3">Primary Button</button>
				<br />

				<button className="button button-secondary margin-top-2">Secondary Button</button>
				<br />

				<button className="button button-tertiary margin-top-2">Tertiary Button</button>
				<br />

				<button className="button button-disabled margin-top-2">Disabled Button</button>
				<br />
			</React.Fragment>
		);
	})
	.add('Swagger', () => <SwaggerView />)
	.addDecorator(getStory => <DemoFormDecorator story={getStory()} />)
	.add('Form Components', () => {
		return (
			<React.Fragment>
				<h1 className="margin-bottom-2">Form Components</h1>

				{/* TextField */}
				<TextField
					label="Single Line Input"
					name="demoTextField"
					helperText="This is some helper text"
					className="margin-top-2"
					required
				/>

				{/* TextField */}
				<TextField
					label="Single Line Input"
					name="demoTextField"
					helperText="This is some helper text"
					helperTextPosition="bottom"
					className="margin-top-2"
				/>

				{/* TextArea */}
				<TextArea
					name="demoTextArea"
					label="Multi Line Input"
					className="margin-top-2"
					helperText="Please enter multi-line text here"
				/>

				{/* Radio */}
				<Radio name="demoRadio" className="margin-top-2" label="Single Radio" />

				{/* Radios - Horizontal */}
				<Radios
					name="demoRadiosHorizontal"
					className="margin-top-2"
					options={['Red', 'Green', 'Blue', 'Yellow', 'Violet', 'Pink']}
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

				{/* Select */}
				<Select
					name="demoSelect"
					className="margin-top-2"
					label="Select - Single Value"
					helperText="This is a dropdown selector"
					data={['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']}
				/>

				{/* MultiSelect */}
				<MultiSelect
					name="demoMultiSelect"
					className="margin-top-2"
					label="Select - Multiple Values"
					helperText="This is a multi-value dropdown selector"
					placeholder="Select values ..."
					data={[
						'Violet',
						'Indigo',
						'Blue',
						'Green',
						'Yellow',
						'Orange',
						'Red',
						'Purple',
						'Black',
						'White',
						'Peach',
						'Navy',
					]}
				/>
			</React.Fragment>
		);
	});
