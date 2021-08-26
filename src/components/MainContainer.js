import React, { useEffect, useState } from 'react';
import UpcomingImages from './UpcomingImages';
import Footer from './Footer';
import moment from 'moment';
import useMovieFetch from '../hooks/useMovieFetch';
import MovieInfo from './MovieInfo';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {fetchMovies} from '../actions/actions';



const MainContainer = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const [movieInfo, setMovieInfo] = useState(null)

    // useMovieFetch(date, setMovies, setLoading, setError)
    // useEffect(() => {
    //     fetchMovies(date, setMovies, setLoading, setError)
    // }, [date])


    const onChange = (date) => {
        const month = date.toString().split(' ')[1]
        const day = date.toString().split(' ')[2]
        const year = date.toString().split(' ')[3]
        const newDate = moment(`${month} ${day}, ${year}`).format("YYYY-MM-DD")
        setDate(newDate)
    }

    const handleOnClick = () => {
        fetchMovies(date, setMovies, setLoading, setError)
    }



    return (
        <div className="main-container">
            
            {loading && <h2>Loading data...</h2>}
            {error && <p>{error}</p>}
            {movies && <UpcomingImages upcoming={movies} setMovieInfo={setMovieInfo}/>}
            <DayPickerInput onDayChange={onChange} />
            <button onClick={handleOnClick}>Find Movies</button>
            <hr />
            {movieInfo && <MovieInfo movie={movieInfo} />}
            <hr />
            <Footer />
        </div>

        

    )
}

export default MainContainer