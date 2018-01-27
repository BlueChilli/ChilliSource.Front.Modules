import {Mod, enhancer} from "chillifront";
import * as allActions from './actions';
import reducer from "./reducer";
import List from "./Views/List";
import Add from "./Views/Add";
import "./Views/mytest.css";
import Edit from "./Views/Edit";

export default class MyTest extends Mod {

  name() {
    return "My Test"
  }

  actions() {
    return allActions;
  }

  reducers() {
    return {MyTestState: reducer};
  }

  routes() {
    return [
      {
        exact: true,
        path: "/mytest",
        component: enhancer(List)
      },
      {
        exact: true,
        path: "/mytest/add",
        component: enhancer(Add)
      },
      {
        exact: true,
        path: "/mytest/edit/:id",
        component: enhancer(Edit)
      },

    ]
  }

}