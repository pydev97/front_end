import demoReducer from '../reducer/demoReducer'
import {createStore} from 'redux'; 
function showLog() {
    console.log("hi");
  }
 const storedemo = createStore(demoReducer,undefined,showLog());

 export default storedemo;