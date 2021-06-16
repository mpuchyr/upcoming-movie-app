import React, { useEffect, useState } from 'react';
import UpcomingImages from './components/UpcomingImages';
import Footer from './components/Footer';
import moment from 'moment';
import './App.css';

function App() {
  const [upcoming, setUpcoming] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"))


  useEffect(() => {
    try {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_ACCESS_TOKEN}&language=en-US&include_adult=false&include_video=false&primary_release_date.gte=${date}`)
      .then(res => res.json())
      .then(data => setUpcoming(data))
    } catch {
      setError('Something went wrong, please try again later')
    }
    setLoading(false)
  }, [])

  
  return (
    <div className="App">
      {loading && <h2>Loading data...</h2>}
      {error && <p>{error}</p>}
      {upcoming && <UpcomingImages upcoming={upcoming}/>}
    </div>
  );
}

export default App;
