import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {


    switch( action.type ){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };

        case actionTypes.RESET:
            return {
                ...state,
                counter: initialState.counter,
                results: initialState.results

            };

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actionTypes.DELETE_RESULT:

            const updatedArray = state.results.filter(result => result.id !== action.resultElID);
            return{
                ...state,
                results: updatedArray
            };

        default:
            return state
    }


};

export default reducer;
