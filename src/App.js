import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import AboutContainer from './components/About/AboutContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
  	<Provider store={store}>
	    <div className="app">
	    	<Header />
	    	<AboutContainer />
	    	<Footer />
	    </div>
	</Provider>
  );
}

export default App;

