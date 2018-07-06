import './css.css';
import * as React from 'react';
import {enhancer, Mod} from 'chillifront';
import * as fbActions from './actions';
import thunk from 'redux-thunk';
import Register from './views/Register';
import RegistrationComplete from './views/RegistrationComplete';
import AppWrapper from './AppWrapper';
import userSelector from './selectors/user';
import getFirebase from './helpers/getFirebase';
import reducer from './reducer';
import SignIn from './views/SignIn';
import authEnhancer from './enhancers/auth';


export default class Firebase extends Mod {

  name() {
    "Firebase"
  }

  routes() {
    return [
      {
        path: '/fbaccount/register',
        component: enhancer(Register),
      },
      {
        path: '/fbaccount/registercomplete',
        component: enhancer(RegistrationComplete),
      },
      {
        path: '/fbaccount/signin',
        component: enhancer(SignIn),
      },
    ];
  }


  options() {
    return {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
    };
  }

  reducers() {
    return {firebase: reducer};
  }

  getFirebaseConfig() {
    return {
      apiKey: this.getOption('apiKey'),
      authDomain: this.getOption('authDomain'),
      databaseURL: this.getOption('databaseURL'),
      projectId: this.getOption('projectId'),
      storageBucket: this.getOption('storageBucket'),
      messagingSenderId: this.getOption('messagingSenderId'),
    };
  }

  middleware() {
    return thunk.withExtraArgument(getFirebase(this.getFirebaseConfig()));
  }

  mapStateToProps() {
    return state => ({
      user: userSelector(state),
    });
  }

  actions() {
    return fbActions;
  }

  wrapApp() {
    return AppWrapper(this.getFirebaseConfig());
  }

  functions() {
    return {
      auth: authEnhancer,
    };
  }
}
