import './movie.css';
import {Link} from "react-router-dom";

export default function Movie({items: {id, poster_path, title}}){
    return(
        <Link className={'link_movie'} to={{pathname: `/movies/${id}`, description: {title} }} >
            <div className={'movie'}>
                <div>
                    <img className={'movies_posters'}
                         src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={'poster'}/>
                </div>

                <div className={'title'}><h3>{title}</h3></div>
            </div>
        </Link>
    )
};
