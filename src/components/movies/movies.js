import './movies.css';
import Movie from "../movie/movie";
import {useEffect, useState} from "react";
import {getMovies} from "../../services/Api";
import {useDispatch, useSelector} from "react-redux";
import {setAddAllMovies} from "../../store/actionCreators";

export default function Movies(){
    const { movies } = useSelector(({ movies }) => movies);
    const dispatch = useDispatch();

    const axiosMovies = async () => {
        const value = await getMovies();
        dispatch(setAddAllMovies(value.data.results));
    }

    useEffect(() => {
        axiosMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [value, setValue] = useState('');

    const filterMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div className={'movies_container'}>
            <div className={'top_movies_with_search'}>
                <h1>Top 20 movies</h1>
                <input className={'movies_input'} type={'text'}
                       onChange={(e) => {setValue(e.target.value)}}
                       placeholder={'Search movie'}
                />
            </div>

            <div className={'movies'}>
                {
                    filterMovies.map(value => <Movie key={value.id} items={value} />)
                }
            </div>
        </div>
    )
};
