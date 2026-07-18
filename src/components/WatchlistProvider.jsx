import { createContext, useState, useEffect } from 'react'

const WatchlistContext = createContext()

export default function WatchlistProvider({ children }) {

  // Load watchlist once on initial render to avoid reading localStorage on every render
  const [watchlist, setWatchlist] = useState(() => {
    try {
      //get saved watchlist from localStorage when app starts
      const savedData = localStorage.getItem("watchlist")
      // If there is saved data, convert it back into an array
      return savedData ? JSON.parse(savedData) : [] 
    } catch {
      // If stored data is invalid, start with an empty watchlist
      return []
    }
    
  })

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])

  function addToWatchlist(movie) {
    const watchlistMovie = {
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      year: movie.year
    }
    // checks if the movie is already in the watchlist by comparing IDs
    const isInWatchlist = watchlist.some((m) => m.id === watchlistMovie.id)

    if (!isInWatchlist) {
      setWatchlist((prev) => [...prev, watchlistMovie])
    }
  }

  function removeFromWatchlist(id) {
    setWatchlist((prev) => 
      prev.filter(movie => movie.id !== id))
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  )
}

export { WatchlistContext }
