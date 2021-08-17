import { useEffect, useState } from 'react';

const useMovieFetch = (date, setMovies, setLoading, setError) => {
    // const [movies, setMovies] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const token = process.env.REACT_APP_TMDB_ACCESS_TOKEN
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${date}`

    useEffect(() => {
        try {
            fetch(url)
                .then(res => res.json())
                .then(data => setMovies(data))
        } catch {
            setError('Something went wrong, please try again later')
        }
        setLoading(false)
    }, [date])


    // return ({ movies, loading, error})

    // useEffect( () => {
    //     try {
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => setMovies(data))
    //       } catch {
    //         setError('Something went wrong, please try again later')
    //       }
    //       setLoading(false)    
    // }, [])


}

export default useMovieFetch

