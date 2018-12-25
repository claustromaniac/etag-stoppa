browser.webRequest.onHeadersReceived.addListener(d => {
		if (!d.responseHeaders) return;
		const newHeaders = d.responseHeaders.filter(h => {
			return h.name.toLowerCase() !== 'etag';
		});
		if (newHeaders.length < d.responseHeaders.length) {
			console.debug(`Removed ETag from request #${d.requestId}\n	${d.url}`);
			return {responseHeaders: newHeaders};
		}
	},
	{urls: ["<all_urls>"]}, ['blocking', 'responseHeaders']
);
