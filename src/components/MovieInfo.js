import React from 'react';

const MovieInfo = ({movie}) => {
    const url = "https://image.tmdb.org/t/p/w500"

    return (
        <div className="movie-info-container">
            <img src={`${url}/${movie.poster_path}`} alt="movie poster"/>
            <h1>{movie.original_title}</h1>
            <h2>{movie.release_date}</h2>
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieInfo