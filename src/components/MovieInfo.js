import React from 'react';
import moment from 'moment';

const MovieInfo = ({movie}) => {
    const url = "https://image.tmdb.org/t/p/w500"

    const movieDate = (date) => {
        let movieDate = moment(date).format('LL')
        return <h2>{movieDate}</h2>
    }

    return (
        <div className="movie-info-container">
            <img src={`${url}/${movie.poster_path}`} alt="movie poster"/>
            <div className="movie-info">
                <h1>{movie.original_title}</h1>
                {movieDate(movie.release_date)}
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieInfo