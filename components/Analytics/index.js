/** Tracking Libraries */
import GoogleAnalytics from 'react-ga';
import MixpanelAnalytics from 'mixpanel-browser';
import HotJarAnalytics from './HotJar';
import HeapAnalytics from './Heap';

/** Helpers */
const gaCode = process.env.REACT_APP_GA_TRACKING_CODE,
	mixpanelCode = process.env.REACT_APP_MIXPANEL_KEY,
	hotJarCode = process.env.REACT_APP_HOT_JAR_KEY,
	heapCode = process.env.REACT_APP_HEAP_KEY;

const isUsingGoogleAnalytics = gaCode && gaCode.length > 0 ? true : false;
const isUsingMixpanelAnalytics =
	process.env.REACT_APP_MIXPANEL_KEY && process.env.REACT_APP_MIXPANEL_KEY.length > 0
		? true
		: false;
const isUsingHotJarAnalytics = hotJarCode && hotJarCode.length > 0 ? true : false;
const isUsingHeapAnalytics = heapCode && heapCode.length > 0 ? true : false;

/** Initialisation */
if (isUsingGoogleAnalytics) {
	GoogleAnalytics.initialize(gaCode);
}

if (isUsingMixpanelAnalytics) {
	MixpanelAnalytics.init(mixpanelCode);
}

if (isUsingHotJarAnalytics) {
	HotJarAnalytics.initialize(hotJarCode);
}

if (isUsingHeapAnalytics) {
	HeapAnalytics.initialize(heapCode);
}

/**
 * Tracks a page view
 * @param {string} url
 */
const trackPageView = url => {
	if (isUsingGoogleAnalytics) {
		GoogleAnalytics.pageview(url);
	}

	if (isUsingMixpanelAnalytics) {
		MixpanelAnalytics.track('Page View', {
			url,
		});
	}
};

/**
 * Tracks an event that occurred on the page
 * @param {*} category
 * @param {*} name
 */
const trackEvent = (category = 'Event', name) => {
	if (isUsingGoogleAnalytics) {
		GoogleAnalytics.event({
			category,
			action: name,
		});
	}

	if (isUsingMixpanelAnalytics) {
		MixpanelAnalytics.track(category, {
			action: name,
		});
	}
};

export default {
	trackPageView,
	trackEvent,
};
