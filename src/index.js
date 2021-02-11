import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { carSalesReducer } from './reducers/carSalesReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

//STEP 2: create the store and pass in the reducer
const store = createStore(carSalesReducer);
console.log("store from index", store.getState());

// STEP 2a: pass the store to a provider component
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>, 
rootElement
);
