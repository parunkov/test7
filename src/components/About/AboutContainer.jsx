import About from './About';
import {connect} from 'react-redux';
import {setItemId} from '../../redux/about-reducer';

const mapStateToProps = (state) => {
	return {
		id: state.about.currentItemId,
		previousId: state.about.previousItemId,
		items: state.about.items
	}
}

export default connect(mapStateToProps, {setItemId})(About);