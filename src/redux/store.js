import {createStore, combineReducers} from 'redux';
import aboutReducer from './about-reducer';

const reducers = combineReducers({
	about: aboutReducer
});

const store = createStore(reducers);

export default store;