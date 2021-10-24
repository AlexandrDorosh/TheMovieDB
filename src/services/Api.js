import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDM2NWM2YmM4MmYxNDMwMDQ3Y2FlZDcwYjU5ZmZmMiIsInN1Yi' +
            'I6IjYwZWIxMDY2Y2U1ZDgyMDAyYzExYjc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbYQYeIeg2NvbHiI' +
            'f0xby3qj48HAvXlihAAAVOF48Og'
    }
})

const getMovies = () => axiosInstance.get('/discover/movie');

const getMovie = (id) => axiosInstance.get(`/movie/${id}`);

export {getMovies, getMovie};
