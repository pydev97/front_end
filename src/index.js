import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from '../src/modules/Calculator'
import storedemo from '../src/store/storedemo'
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);


console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo'})
console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo1'})
console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo'})
console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo'})
console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo'})
console.log(storedemo.getState().value);
storedemo.dispatch({type : 'demo'})
console.log(storedemo.getState().value);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
