import {createStore,applyMiddleware} from 'redux'
import {listUserReducer} from '../component/reducer/EmployeeReducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
export const store =  createStore(listUserReducer,composedEnhancer
);