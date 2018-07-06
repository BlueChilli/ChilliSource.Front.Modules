import {configure} from '@storybook/react';

function loadStories() {
  require('../stories/form-vertical-fields.js');
  require('../stories/sass-helpers.js');
  require('../stories/components.js');


}

configure(loadStories, module);