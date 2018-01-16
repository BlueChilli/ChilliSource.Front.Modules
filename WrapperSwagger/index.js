import { Mod } from 'chillifront';
import SwaggerComponent from './SwaggerComponent';


export default class LoadSwagger extends Mod {
  options() {
    return { apiBaseURL: '', apiKey: '' };
  }

  wrapApp() {
    return SwaggerComponent(this.getOptions());
  }

  expose() {
    return {
      foo: 'winner winner chicken dinner',
      bar: () => 'baaaa',
    };
  }
}
