import { useContext } from 'react'
import MovieGrid from "../components/MovieGrid"
import { WatchlistContext } from '../components/WatchlistProvider'

export default function Watchlist() {

  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext)

  return (
    <div>
      <h1>My Watchlist</h1>
      <MovieGrid movies={watchlist} />
    </div>
  )
}

