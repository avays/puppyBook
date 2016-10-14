import { createStore, applyMiddleware } from 'redux';
import allPuppies from './reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
    allPuppies,
    applyMiddleware(createLogger(), thunkMiddleware)    
);
