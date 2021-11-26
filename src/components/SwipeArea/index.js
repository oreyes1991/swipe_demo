import { Div, Img } from '@rebelstack-io/metaflux';
import { Option } from '../Option';

const options = [
	'red',
	'blue',
	'yellow',
	'green'
]

const questionURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2560px-Question_Mark.svg.png';

export const SwipeArea = (props) => {
	return Div({ className: 'swipe-area-wrapper' }, [
		Img({ src: questionURL }),
		...options.map((color) => {
			return Option({ symbol: color })
		})
	]);
};
