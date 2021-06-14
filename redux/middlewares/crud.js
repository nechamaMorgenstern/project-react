
import PersonService from "../../services/PersonService";
import { actions } from "../Action";


export const getAllPersonFromServer =  ({ dispatch, getState }) => next => action => {
async function getAll(){
     const persons = await PersonService.getAll();
            dispatch(actions.setPerson(persons))
}
    if (action.type === 'SET_PERSON_FROM_SERVER') {
        try {
            getAll();
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}