import React from 'react'
import { useEffect, useState } from 'react'
import { formatMovie } from "../utils/formatMovie"
import useFetchMovies from '../hooks/useFetchMovies'
import MovieGrid from '../components/MovieGrid'

export default function Home() {
  const { data, loading, error } = useFetchMovies("discover/movie")

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  const movies = data.results.map(formatMovie)

  return (
    <section>
      <MovieGrid movies={movies} />
    </section>
  )
}
