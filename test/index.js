import * as React from 'react';
import TestComponent from './TestComponent';
import { Route, Switch } from 'react-router-dom';
import { Mod } from 'chillifront';
import reducer from './reducer';
import SDBComponent from '../EnhancerDelayBeforeShowing/SDBComponent';
import * as allActions from './actions';


export default class foo extends Mod {
  name() {
    return 'MyTestModule';
  }

  reducers() {
    return { test: reducer };
  }

  options() {
    return { basePath: '' };
  }

  component() {
    return TestComponent;
  }

  actions() {
    return allActions;
  }

  routes(applyEnhancers) {
    const basePath = this.getOption('basePath');

    return [
      {
        path: `${basePath}/win`,
        component: TestComponent,
        exact: true,
      },
    ];
  }
}
