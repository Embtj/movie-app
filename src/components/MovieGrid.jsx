import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies }) {
  return (
    <section className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          year={movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
        />
      ))}
    </section>
  )
}
