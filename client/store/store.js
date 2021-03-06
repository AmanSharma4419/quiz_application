import { createStore, combineReducers, applyMiddleware } from "redux";

// Importing the applymiddleware thunk
import thunk from "redux-thunk";

// Importing the reducers
import adminReducer from "../reducers/adminReducer";
import questionReducer from "../reducers/questionReducer";
import quizSetReducer from "../reducers/quizSetReducer";
import userAuthReducer from "../reducers/userAuthReducer";

// Making rootReducer
const rootReducer = combineReducers({
  adminReducer,
  questionReducer,
  quizSetReducer,
  userAuthReducer
});

// Making store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Explictily exporting the store
export default store;
