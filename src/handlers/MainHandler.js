/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	value: 1,
	swipedValue: ''
};

export default {
	MainDefaultState,
	MainHandler: {
		'INCREMENT': (action, state) => {
			state.Main.value += 1;
			return { newState: state };
		},
		'SWIPE': (action, state) => {
			state.Main.swipedValue = action.swipedValue;
			console.log('swipeValue: ', action.swipedValue);
			return { newState: state }
		}
	}
};
