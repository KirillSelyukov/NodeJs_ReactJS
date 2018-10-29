import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import reduxThunk from 'redux-thunk';

import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.querySelector('#root'));
