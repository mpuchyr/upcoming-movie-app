import React from 'react';

const MovieInfo = ({movie}) => {
    console.log(movie)
    return (
        <div>
            {movie.original_title}
        </div>
    )
}

export default MovieInfo