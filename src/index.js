import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListUser from './component/ListUser';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store,fetchTodos} from './store/store'
import Page from './component/initPage'
import axios from 'axios'
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Page/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// store.dispatch({type:"getAllUser"})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
