import {
    ADD_ALL_MOVIES,
    GET_MOVIE,
    LOADING_TRUE,
    LOADING_FALSE
} from '../actionTypes';

export const setAddAllMovies = (payload) => ({type: ADD_ALL_MOVIES, payload});

export const setGetMovie = (payload) => ({type: GET_MOVIE, payload});

export const setLoadingTrue = () => ({type: LOADING_TRUE});

export const setLoadingFalse = () => ({type: LOADING_FALSE});
