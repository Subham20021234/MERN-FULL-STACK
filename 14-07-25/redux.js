const { createStore } = require("redux");

// Actions – plain objects
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };

// Initial state
let initialState = {
  count: 0,
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

// Dispatch actions
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(increment);


// Log the final state 
console.log(store.getState());
