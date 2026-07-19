import React from 'react'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

export default function MovieGrid({ movies, loading }) {

  if (loading) {
    return (
      <section className="movie-grid">
        {Array.from({ length: 12}).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </section>
    )
  }

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