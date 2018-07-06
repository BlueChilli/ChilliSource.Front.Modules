import View from './View';
import {Mod} from 'chillifront';
import React from "react";


export default class NotFoundPage extends Mod {

  name() {
    return "NotFoundPage";
  }

  options() {
    return {
      text: "Oh no, something went wrong."
    }
  }

  routes(applyEnhancers) {
    return [
      {
        component: applyEnhancers(() => <View text={this.getOption("text")}/>),
      },
    ];
  }

}
