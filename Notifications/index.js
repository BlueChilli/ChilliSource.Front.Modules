import * as React from 'react';
import { Mod } from 'chillifront';
import reducer from './reducer';
import * as actions from './actions';

export default class Notificiations extends Mod {
  actions() {
    return actions;
  }

  reducers() {
    return {
      notifications: reducer,
    };
  }
}
