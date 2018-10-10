const initialize = (hotJarId, hotJarScriptVersion) => {
	(function(window, document, scriptSrc, scriptVersion, headElement, scriptElement) {
		window.hj =
			window.hj ||
			function() {
				(window.hj.q = window.hj.q || []).push(arguments);
			};
		window._hjSettings = { hjid: hotJarId, hjsv: hotJarScriptVersion };
		headElement = document.getElementsByTagName('head')[0];
		scriptElement = document.createElement('script');
		scriptElement.async = 1;
		scriptElement.src =
			scriptSrc + window._hjSettings.hjid + scriptVersion + window._hjSettings.hjsv;
		headElement.appendChild(scriptElement);
	})(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');
};

export default {
	initialize,
};
