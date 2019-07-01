import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store'
import * as actions from './state/actions'
import { App } from './components/App';

const container = document.createElement('div')
container.setAttribute('id', 'root')
document.body.appendChild(container)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
