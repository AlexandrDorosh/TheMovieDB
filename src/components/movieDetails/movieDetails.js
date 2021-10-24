import './movieDetails.css';
import {useParams} from "react-router-dom";
import {getMovie} from "../../services/Api";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setGetMovie, setLoadingFalse, setLoadingTrue} from "../../store/actionCreators";

export default function MovieDetails(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, isLoading } = useSelector(({movies}) => movies)

    const axiosMovie = async (id) => {
        try {
            dispatch(setLoadingTrue());
            const resp = await getMovie(id);
            dispatch(setGetMovie(resp.data));
        } catch (e){
            console.log(e);
        } finally {
            dispatch(setLoadingFalse());
        }
    }

    useEffect(() => {
        axiosMovie(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const {
        original_title,
        title,
        poster_path,
        genres,
        overview,
        original_language,
        release_date,
        production_countries,
        tagline,
        popularity,
        homepage,
        status
        } = movie;

    if(isLoading) return <h1 className={'movie_details_container'}>LOADING...</h1>

    return(
        <div className={'movie_details_container'}>
            <div className={'movie_details'}>
                <div>
                    <img className={'movie_details_poster'}
                          src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={'poster'}/>
                </div>

                <div className={'movie_details_description'}>
                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Title: </span>
                            {title}
                        </h3>
                    </div>

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Original title: </span>
                            {original_title}
                        </h3>
                    </div>

                    <div>
                        <h3 className={'movie_details_genre'}>
                            <span className={'movie_details_info'}>Genre:</span>
                            {
                               genres && genres.map(value =>
                                   <p key={value.id}>{value.name}</p> )
                            }
                        </h3>
                    </div>

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Language: </span>
                            {original_language}
                        </h3>
                    </div>

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Status: </span>
                            {status}
                        </h3>
                    </div>

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Release Date: </span>
                            {release_date}
                        </h3>
                    </div>

                    <div>
                        <h3 className={'movie_details_genre'}>
                            <span className={'movie_details_info'}>Production Countries:</span>
                            {
                                production_countries && production_countries.map((value, i) =>
                                    <p key={i}>{value.name}</p> )
                            }
                        </h3>
                    </div>

                    {
                        tagline
                            ?
                        <div>
                            <h3>
                                <span className={'movie_details_info'}>Tagline: </span>
                                {tagline}
                            </h3>
                        </div>
                            :
                            null
                    }

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Popularity: </span>
                            {popularity}
                        </h3>
                    </div>

                    {
                        homepage
                            ?
                            <div>
                                <h3>
                                    <span className={'movie_details_info'}>Home page: </span>
                                    {homepage}
                                </h3>
                            </div>
                            :
                            null
                    }

                    <div>
                        <h3>
                            <span className={'movie_details_info'}>Overview: </span>
                            {overview}
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    )
};
