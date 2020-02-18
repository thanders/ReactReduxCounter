const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {


    switch( action.type ){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'RESET':
            return {
                ...state,
                counter: initialState.counter,
                results: initialState.results

            };

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case 'DELETE_RESULT':

            const updatedArray = state.results.filter(result => result.id !== action.resultElID);
            return{
                ...state,
                results: updatedArray
            }

        default:
            return state
    }


};

export default reducer;
