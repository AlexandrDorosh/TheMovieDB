import './header.css';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className={'header_container'}>
            <div className={'header'}>
                <div className={'logo'}><h2>TheMovieDB</h2></div>

                <div>
                    <Link className={'header_link'} to={'/'}>
                        <h2>Home page</h2>
                    </Link>
                </div>

                <div>
                    <Link className={'header_link'} to={'/movies'}>
                        <h2>Top 20 movies</h2>
                    </Link>
                </div>

                <div className={'logo'}><h2>Test Task for DS</h2></div>
            </div>
        </div>
    )
};
