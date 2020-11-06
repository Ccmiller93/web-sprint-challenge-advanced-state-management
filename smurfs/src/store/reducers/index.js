import { FETCH_START , FETCH_SUCCESS , ADD_SMURF } from '../actions'

const initialState = {
    loading: false,
    smurfs: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START :
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS :
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
}