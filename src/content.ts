const intervalId = setInterval(() => {
	const elements = document.getElementsByClassName('status-actions');
	for (let i = 0; i < elements.length; i++) {
		elements[i].setAttribute('target', '_blank');
		elements[i].setAttribute('rel', 'noreferrer noopener');
	}
	clearInterval(intervalId);
}, 1000);
