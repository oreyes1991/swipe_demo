document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches (evt) {
	return evt.touches || // browser API
				evt.originalEvent.touches; // jQuery
}

function handleTouchStart (evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
};

function handleTouchMove (evt) {
	if (!xDown || !yDown) {
		return;
	}

	let xUp = evt.touches[0].clientX;
	let yUp = evt.touches[0].clientY;

	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			/* right swipe */
			console.log('swipe left');
			dispatch('left');
		} else {
			console.log('swipe right');
			dispatch('right');
			/* left swipe */
		}
	} else {
		if (yDiff > 0) {
			/* down swipe */
			console.log('swipe up');
			dispatch('up');
		} else {
			console.log('swipe dowm');
			dispatch('down');
			/* up swipe */
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
};

function dispatch (direction) {
	global.storage.dispatch({ type: 'SWIPE', swipedValue: direction })
}
