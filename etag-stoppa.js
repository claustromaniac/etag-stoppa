browser.webRequest.onHeadersReceived.addListener(
	function(d) {
		if (!d.responseHeaders) return;
		let headers = d.responseHeaders;
		let newHeaders = [];
		for (let i in headers) {
			if (headers[i].name.toLowerCase() !== 'etag') {
				newHeaders.push(headers[i]);
			}
		}
		return {responseHeaders: newHeaders};
	},
	{urls: ["<all_urls>"]}, ['blocking', 'responseHeaders']
);