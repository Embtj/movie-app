import { useContext } from 'react'
import { useParams } from "react-router"
import useFetchMovies from '../hooks/useFetchMovies'
import { WatchlistContext } from '../components/WatchlistProvider'

export default function MovieDetails() {
  const { id } = useParams()
  const { data, loading, error } = useFetchMovies(`movie/${id}`)
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  const isInWatchlist = watchlist.some((movie) => movie.id === data.id)

  return (
    <div className="movie-details-container">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={`${data.title} poster`}/>
      <h1>{data.title}</h1>
      <div className="movie-info">
        <p>{data.release_date ? data.release_date.split("-")[0] : "N/A"}</p>
        <span>&bull;</span>
        <p>{data.runtime} mins</p> 
      </div>
      <ul className="genre-list">
        {data.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      {data.tagline && <p className="movie-tagline">{data.tagline.toUpperCase()}</p>}
      <p className="movie-overview">{data.overview}</p>
      <button type="button" 
      onClick={() => 
        isInWatchlist 
          ? removeFromWatchlist(data.id) 
          : addToWatchlist(data)}
          >
            {isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
          </button>
    </div>
  )
}

