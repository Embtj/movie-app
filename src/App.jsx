import React from 'react'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <section className="movie-grid">
        <MovieCard />
        <MovieCard />
      </section>
    </div>
  )
}
