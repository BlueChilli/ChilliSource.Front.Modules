import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/form-vertical-fields.js');
	require('../stories/style-helpers.js');
	require('../stories/components.js');
	require('../stories/chillsource-app.js');
}

configure(loadStories, module);
