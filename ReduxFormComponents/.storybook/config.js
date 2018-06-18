import {configure} from '@storybook/react';

function loadStories() {
  require('../stories/form-vertical-fields.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);