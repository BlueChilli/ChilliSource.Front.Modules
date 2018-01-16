import * as React from 'react';
import { Mod, enhancer } from 'chillifront';

import Login from './TempViews/login';
import Logout from './TempViews/Logout';


export default class Accounts extends Mod {
  routes() {
    return [
      {
        path: '/account/login',
        component: enhancer(Login),
      },
      {
        path: '/account/logout',
        component: enhancer(Logout),
      },
    ];
  }

  expose() {
    return {
      component: enhancer(Login),
    };
  }
}
