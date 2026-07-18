export function formatMovie(movie) {
  return {
    ...movie,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    year: movie.release_date?.split("-")[0] || "N/A"
  }
}