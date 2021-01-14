import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store,fetchTodos} from './store/store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './component/list-employees'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <EmployeeList/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// store.dispatch({type:"getAllUser"})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
