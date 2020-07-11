import * as actionType from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            };
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };

        case actionType.DELETE_RESULT:
            // filter will return a new array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }

        default:
            return state;
    }

};

export default reducer;