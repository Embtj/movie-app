export function formatMovie(movie) {
  return {
    ...movie,
    poster: movie.poster_path 
      ?
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
    year: movie.release_date?.split("-")[0] || "N/A"
  }
}