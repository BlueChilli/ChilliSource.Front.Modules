import React from 'react';
import scriptLoader from 'react-async-load-script';

export default ({ trackingId }) => WrappedComponent => {
	class Ga extends React.Component {
		shouldComponentUpdate(prevProps) {
			if (
				prevProps.isScriptLoadSucceed !== this.props.isScriptLoadSucceed &&
				prevProps.isScriptLoadSucceed
			) {
				window.dataLayer = window.dataLayer || [];

				function gtag() {
					window.dataLayer.push(arguments);
				}

				gtag('js', new Date());

				gtag('config', `${trackingId}`);
			}

			return false;
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return scriptLoader([`https://www.googletagmanager.com/gtag/js?id=${trackingId}`])(Ga);
};
