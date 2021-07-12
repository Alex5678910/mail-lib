import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todoGreen from "./todos";

export default combineReducers({
    todoGreen, //- const initialState = {allIds: [], byIds: {}, val: ''}
    visibilityFilter
});