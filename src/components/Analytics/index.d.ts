/** Libraries */
import React from 'react';

export = Analytics;
export as namespace Analytics;

declare namespace Analytics {
	export function trackPageView(url: string): void;

	export function trackEvent(category: string, name: string): void;
}
