import React from 'react'
import { useEffect, useState } from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MovieGrid from '../components/MovieGrid'

export default function Home() {
  const { data, loading, error } = useFetchMovies("discover/movie")

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  return (
    <section>
      <MovieGrid movies={data.results} />
    </section>
  )
}
