import { createStore, combineReducers, applyMiddleware } from "redux";

// Importing the applymiddleware thunk
import thunk from "redux-thunk";

// Importing the reducers
import adminReducer from "../reducers/adminReducer";
import questionReducer from "../reducers/questionReducer";
// Making rootReducer
const rootReducer = combineReducers({ adminReducer, questionReducer });

// Making store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Explictily exporting the store
export default store;
