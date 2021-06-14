import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   person:[],
   savePerson:{}
  
}

const personFunc = {
   setPerson(state,action){
       state.person=action.payload
   },
   setSavePerson(state,action){
    state.savePerson=action.payload
},
   addPerson(state,action){
       state.person.push(action.payload)
   }
}

export default produce((state, action) => createReducer(state, action, personFunc), initialState);
