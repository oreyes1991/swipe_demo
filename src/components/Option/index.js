import { Div } from '@rebelstack-io/metaflux';

const dirMap = {
	'up': 'red',
	'down': 'blue',
	'left': 'yellow',
	'right': 'green'
}

export const Option = (props) => {
	return Div({ className: 'option-wrapper t-' + props.symbol }, [
		Div({ className: props.symbol })
	]).onStoreEvent('SWIPE', (state, that) => {
		const selected = dirMap[state.Main.swipedValue];
		console.log(selected);
		if (selected === props.symbol) {
			that.classList.add('selected');
		} else {
			that.classList.remove('selected');
		}
	})
}
