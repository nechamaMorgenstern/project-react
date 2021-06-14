import {createStore,combineReducers} from 'redux';

import personReducer from './reducers/personReducer';
import{applyMiddleware} from 'redux'
import {getAllPersonFromServer} from './middlewares/crud'


const reducer=combineReducers({personReducer})
const store=createStore(reducer,applyMiddleware(getAllPersonFromServer));
store.dispatch({type:'SET_PERSON_FROM_SERVER'})

window.store=store;
export default store;