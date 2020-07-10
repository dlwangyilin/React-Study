const redux = require('redux');  // NodeJs syntax
const createStore = redux.createStore;

const initialState = {
    counter: 0
};
// Reducer
const rootReducer = (state = initialState, action) => {
    return state;  // updated state
}
// Store
const store = createStore(rootReducer);
console.log(store.getState());
// Dispatching Action

// Subscription