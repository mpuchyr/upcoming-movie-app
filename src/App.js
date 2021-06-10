import React, { useEffect, useState } from 'react';
import UpcomingImages from './components/UpcomingImages';
import './App.css';

function App() {
  const [upcoming, setUpcoming] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_ACCESS_TOKEN}&language=en-US`)
      .then(res => res.json())
      .then(data => setUpcoming(data))
    } catch {
      setError('Something went wrong, please try again later')
    }
    setLoading(false)
  }, [])

  
  return (
    <div className="App">
      Main Page Placeholder
      {loading && <h2>Loading data...</h2>}
      {error && <p>{error}</p>}
      <UpcomingImages upcoming={upcoming}/>
    </div>
  );
}

export default App;
