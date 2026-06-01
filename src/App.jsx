import { useEffect, useState } from 'react'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

export default function App() {

  const [movies, setMovies] = useState([])
  
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  function getMovie() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)
    }  
    )
  }

  useEffect(() => {
    getMovie()
  }, [])

  const movieElements = movies.map(movie => (
    <MovieCard 
      key={movie.id}
      poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      title={movie.title}
      year={movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
    />
  ))

  return (
    <div className="app-container">
      <Header />
      <section className="movie-grid">
        {movieElements}
      </section>
    </div>
  )
}
