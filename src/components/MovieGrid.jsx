import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies }) {
  return (
    <section className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster}
          title={movie.title}
          year={movie.year}
        />
      ))}
    </section>
  )
}
