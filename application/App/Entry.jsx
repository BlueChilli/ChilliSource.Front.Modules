import React, {Fragment} from 'react'
import {Switch, Route, Redirect} from "react-router";
import AccountBase from "./account/Base";
import allowAuth from "../modules/ReduxSwaggerAccount/Components/allowAuth";
import "./assets/styles/globalStyles.css";
import Base from "./app/Base";
import ProgramBase from "./app/Program/ProgramBase";


export default class extends React.Component {
  render() {
    return (
      <Fragment>

        <Switch>
          <Redirect exact from='/' to='/app'/>
          <Redirect exact from='/index.html' to='/app'/>
          <Route path="/account" component={AccountBase}/>
          <Route path="/app/program" component={allowAuth(ProgramBase)}/>
          <Route path="/app" component={allowAuth(Base)}/>
          {this.props.routes}
        </Switch>

      </Fragment>
    )
  }
}


