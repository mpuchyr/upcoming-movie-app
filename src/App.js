import React, { useEffect, useState } from 'react';
import UpcomingImages from './components/UpcomingImages';
import Footer from './components/Footer';
import moment from 'moment';
import useMovieFetch from './hooks/useMovieFetch';
import './App.css';

function App() {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

  useMovieFetch(date, setMovies, setLoading, setError)

  return (
    <div className="App">
      {loading && <h2>Loading data...</h2>}
      {error && <p>{error}</p>}
      {movies && <UpcomingImages upcoming={movies}/>}
    </div>
  );
}

export default App;
