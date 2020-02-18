import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux related imports
import { createStore, combineReducers } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import { Provider } from  'react-redux';

const rootReducer = combineReducers({
    ctr: counterReducer(),
    res: resultReducer()
});
const store = createStore(rootReducer);

// Wrap <App> with <provider> and pass in store as a parameter
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
