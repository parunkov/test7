import About from './About';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		id: state.about.currentItemId,
		items: state.about.items
	}
}

export default connect(mapStateToProps, {})(About);