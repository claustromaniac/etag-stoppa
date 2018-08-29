browser.webRequest.onHeadersReceived.addListener(
	function(d) {
		if (!d.responseHeaders) return;
		let newHeaders = [];
		for (var i in d.responseHeaders) {
			if (d.responseHeaders[i].name.toLowerCase() !== 'etag') {
				newHeaders.push(d.responseHeaders[i]);
			}
		}
		return {responseHeaders: newHeaders};
	},
	{urls: ["<all_urls>"]}, ['blocking', 'responseHeaders']
);