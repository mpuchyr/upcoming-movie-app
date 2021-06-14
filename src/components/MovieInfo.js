import React from 'react';

const MovieInfo = ({movie}) => {
    console.log(movie)
    return (
        <div>
            <h1>{movie.original_title}</h1>
            <h2>{movie.release_date}</h2>
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieInfo