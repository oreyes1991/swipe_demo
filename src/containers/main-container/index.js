import { MetaContainer, Div } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import { SwipeArea } from '../../components/SwipeArea';
import { List } from '../../components/List';
import '../../util';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		return Div({ id: 'container' }, [SwipeArea(), List()])
	}
}

window.customElements.define('main-container', MainContainer);
