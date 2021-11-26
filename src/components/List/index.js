import { Div, H3, Span } from '@rebelstack-io/metaflux';

const list = [
	{
		symbol: 'red',
		answer: 'Dobby!'
	},
	{
		symbol: 'yellow',
		answer: 'Sirius Black'
	},
	{
		symbol: 'blue',
		answer: 'Rubeus Hagrid'
	},
	{
		symbol: 'green',
		answer: 'Snape'
	}
]

const dirMap = {
	'up': 'red',
	'down': 'blue',
	'left': 'yellow',
	'right': 'green'
}

export const List = () => Div({ className: 'list-wrapper' }, list.map((l) => {
	return Div({ className: 'list-item l-' + l.symbol }, [
		Span({}, l.symbol),
		H3({}, l.answer)
	]).onStoreEvent('SWIPE', (state, that) => {
		const selected = dirMap[state.Main.swipedValue];
		if (selected === l.symbol) {
			that.classList.add('selected');
		} else {
			that.classList.remove('selected');
		}
	})
}));
