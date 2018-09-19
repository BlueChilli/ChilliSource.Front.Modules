import React from 'react';
import { storiesOf } from '@storybook/react';
import './helpers/storybook.css';
import chillifront from 'chillifront';
import NotificationTest from '../chillisauce-app/App/NotificationTest';
import NotFoundPage from '../modules/404/index';
import ReduxThunk from '../modules/ReduxThunk/index';
import Notification from '../modules/Notification/index';
import GoogleAnalytics from '../modules/GoogleAnalytics/index';
import Ga from '../chillisauce-app/App/Ga';
import ReduxPromiseMiddleware from '../modules/ReduxPromiseMiddleware/index';
import SwaggerDataTest from '../chillisauce-app/App/SwaggerDataTest';

const CF = ({ children }) => {
	const C = children;
	return <C />;
};

storiesOf('ChillFront', module)
	.add('Notifications', () => (
		<CF>
			{chillifront([new Notification(), new ReduxThunk(), new NotFoundPage()])(NotificationTest)}
		</CF>
	))
	.add('Google Analytics', () => (
		<CF>
			{chillifront([
				new GoogleAnalytics({
					debug: true,
					trackingId: 'UA-103046519-2',
					require: ['eventTracker', 'outboundLinkTracker', 'urlChangeTracker'],
				}),
			])(Ga)}
		</CF>
	))
	.add('Swagger Data', () => (
		<CF>
			{chillifront([
				new ReduxPromiseMiddleware(),
				new ReduxThunk(),
				// new SwaggerData()
			])(SwaggerDataTest)}
		</CF>
	));
