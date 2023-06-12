window?.DebuggingHelpers?.websocket?.unbreak();
requestAnimationFrame(() => {
	window?.DebuggingHelpers?.websocket?.break();
});

setInterval(() => {
	window?.DebuggingHelpers?.websocket?.unbreak();
	requestAnimationFrame(() => {
		window?.DebuggingHelpers?.websocket?.break();
	});
}, 5000);
