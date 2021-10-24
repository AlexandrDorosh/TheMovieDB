import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReduser";

const rootReducer = combineReducers({
    movies: moviesReducer
})

export default rootReducer;