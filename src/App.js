import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import AboutContainer from './components/About/AboutContainer';

function App() {
  return (
  	<Provider store={store}>
	    <div className="app">
	    	<Header />
	    	<AboutContainer />
	    </div>
	</Provider>
  );
}

export default App;

