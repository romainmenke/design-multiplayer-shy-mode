function breakMultiplayer() {
	breaker = window?.DebuggingHelpers?.websocket?.break;
	if (breaker) {
		console.log("Breaking multiplayer...");
		breaker();
		return true;
	}

	return false;
}

if (!breakMultiplayer()) {
	requestAnimationFrame(() => {
		breakMultiplayer()
	});

	document.addEventListener('readyStateChange', () => {
		breakMultiplayer()
	});

	let interval = window.setInterval(() => {
		if (breakMultiplayer()) {
			window.clearInterval(interval);
		}
	}, 100);
}
