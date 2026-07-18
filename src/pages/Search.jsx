import React from 'react'
import { useSearchParams } from "react-router"
import { formatMovie } from "../utils/formatMovie"
import useFetchMovies from '../hooks/useFetchMovies'
import MovieGrid from '../components/MovieGrid'

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const { data, loading, error } = useFetchMovies("search/movie", { query })

  if (!query || !query.trim()) {
    return <p>Please enter a search term.</p>
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null
  if (data.results.length === 0) return <p>No results found for "{query}". Try a different search.</p>

  const movies = data.results.map(formatMovie)

  return (
    <div>
      <MovieGrid movies={movies} />
    </div>
  )
}

