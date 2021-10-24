import './main.css';
import {Route, Switch} from "react-router-dom";
import Movies from "../movies/movies";
import MovieDetails from "../movieDetails/movieDetails";
import HomePage from "../homePage/homePage";

export default function Main(){
    return(
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <HomePage />} />
                <Route path={'/movies/:id'} render={() => <MovieDetails />}/>
                <Route path={'/movies'} render={() => <Movies />} />
            </Switch>
        </div>
    )
};
