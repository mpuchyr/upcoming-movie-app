import React, { useState } from 'react';
import UpcomingImages from './UpcomingImages';
import Footer from './Footer';
import moment from 'moment';
import useMovieFetch from '../hooks/useMovieFetch';


const MainContainer = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    useMovieFetch(date, setMovies, setLoading, setError)
    
    return (
        <div>
            {loading && <h2>Loading data...</h2>}
            {error && <p>{error}</p>}
            {movies && <UpcomingImages upcoming={movies}/>}
            <Footer />
        </div>

        

    )
}

export default MainContainer