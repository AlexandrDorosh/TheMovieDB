import {
    ADD_ALL_MOVIES,
    GET_MOVIE,
    LOADING_TRUE,
    LOADING_FALSE
} from '../actionTypes'

const initialState = {
    movies: [],
    movie: {},
    isLoading: false
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ALL_MOVIES:
            return {...state, movies: action.payload}
        case GET_MOVIE:
            return {...state, movie: action.payload}
        case LOADING_TRUE:
            return {...state, isLoading: true}
        case LOADING_FALSE:
            return {...state, isLoading: false}
        default:
            return state
    }
};
