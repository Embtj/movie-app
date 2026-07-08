import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard"
import useFetchMovies from '../hooks/useFetchMovies'

export default function Home() {
  const { data, loading, error } = useFetchMovies("discover/movie")

  const movieElements = data?.results.map(movie => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      title={movie.title}
      year={movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
    />
  ))

  return (
    <section className="movie-grid">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movieElements}
    </section>
  )
}
