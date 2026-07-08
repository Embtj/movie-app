import React from 'react'
import { useSearchParams } from "react-router"
import useFetchMovies from '../hooks/useFetchMovies'
import MovieGrid from '../components/MovieGrid'

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const { data, loading, error } = useFetchMovies("/search/movie", { query })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  return (
    <div>
      <MovieGrid movies={data.results} />
    </div>
  )
}

