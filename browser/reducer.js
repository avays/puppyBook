import { RECEIVE_PUPPIES } from './action-creators'

const initialState = {allPuppies: []}

export default function allPuppies (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PUPPIES: return Object.assign({}, state, {
            allPuppies: action.receivedPuppies
        });
        default: return state;
    }
}; 
