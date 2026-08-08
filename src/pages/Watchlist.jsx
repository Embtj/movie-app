import { useContext } from 'react'
import { Link } from "react-router"
import MovieGrid from "../components/MovieGrid"
import { WatchlistContext } from '../components/WatchlistProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons"

export default function Watchlist() {

  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext)


  return (
    <div>
      <h1 className="watchlist-heading">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <div className="watchlist-empty">
          <FontAwesomeIcon icon={faFilm} className="film-icon" />
          <h2 className="watchlist-empty-heading">Your watchlist is empty</h2>
          <p className="watchlist-empty-text">Start building your watchlist by adding movies you want to watch</p>
          <Link to="/" className="browse-movies-link">Browse movies</Link>
        </div>
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </div>
  )
}

