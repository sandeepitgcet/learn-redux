import { ACTIONS } from "../actions/actions1"
const initialState = {
    value : 0
}
const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.INCREMENT :
            return {value: state.value+1};
        case ACTIONS.DECREMENT :
            return {value:state.value-1};
        default : return state;
    }
}

export default reducer;