import { Mod } from 'chillifront';
import SpinnerComponent from './SpinnerComponent';
import * as React from 'react';

export default class Spinner extends Mod {
  component(...props) {
    return <SpinnerComponent {...props} />;
  }
}
