import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import "./helpers/storybook.css";
import chillifront from "chillifront";
import configureStore from "../chillisauce-app/redux/configureStore";
import Entry from "../chillisauce-app/App/Entry";
import Hello from "../chillisauce-app/App/Hello";
import NotificationTest from "../chillisauce-app/App/NotificationTest";

import NotFoundPage from "../modules/404/index";
import ReduxThunk from "../modules/ReduxThunk/index";
import Notification from "../modules/Notification/index";
import GoogleAnalytics from "../modules/GoogleAnalytics/index";


const CF = ({children}) => {
  const C = children;
  return <C/>;
};

storiesOf('ChillFront', module)
  .add('Notifications', () => <CF>{chillifront(
    [
      new Notification(),
      new ReduxThunk(),
      new NotFoundPage()
    ],
    configureStore
  )(NotificationTest)}</CF>)
  .add('Google Analytics', () => <CF>{chillifront(
    [
      new GoogleAnalytics({
        debug: true,
        trackingId: "123123144",
        require: ['eventTracker', 'outboundLinkTracker', 'urlChangeTracker']
      })
    ],
    configureStore
  )(NotificationTest)}</CF>);


