import * as React from 'react';
import { Mod } from 'chillifront';
import { reducer as form } from 'redux-form/immutable';

export default class ReduxForm extends Mod {
  name(){
    return "Redux Form";
  }

  reducers() {
    return { form };
  }
}
