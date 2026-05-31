import React from 'react'
import moviePoster from "../assets/movie-poster.jpg"

export default function MovieCard() {
  return (
    <article className="movie-card">
      <img src={moviePoster} alt="movie poster" className="movie-poster" />  
      <h2 className="movie-title">Title</h2>
      <p className="movie-year">2022</p>
    </article>
  )
}
