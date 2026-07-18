import { useContext } from 'react'
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { WatchlistContext } from '../components/WatchlistProvider'

export default function MovieCard(props) {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext)

  const isInWatchlist = watchlist.some((movie) => movie.id === props.id)
  
  return (
      <article className="movie-card">
        <Link to={`/movie/${props.id}`} className="movie-card-link">
          <img src={props.poster} alt={`${props.title} poster`} className="movie-poster" /> 
          <div className="movie-card-text">
            <h2 className="movie-title">{props.title}</h2>
            <p className="movie-year">{props.year}</p>
          </div> 
        </Link>
        <button className="movie-card-watchlist-btn"
            onClick={() =>
              isInWatchlist
                ? removeFromWatchlist(props.id)
                : addToWatchlist(props)
            }
          >
            {isInWatchlist ? <FontAwesomeIcon icon={faCircleMinus} /> : <FontAwesomeIcon icon={faCirclePlus} />}
          </button>
      </article>
  )
}