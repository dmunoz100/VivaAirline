import { createStore, combineReducers } from "redux";
import CitiesReducer from '../Store/Reducer'

const reducers = combineReducers({CitiesReducer});
export const store = createStore(reducers,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());