import { useContext } from 'react'
import { useParams, Link, useNavigate } from "react-router"
import useFetchMovies from '../hooks/useFetchMovies'
import { WatchlistContext } from '../components/WatchlistProvider'
import noPosterImage from "../assets/no-poster.jpg"

export default function MovieDetails() {
  const { id } = useParams()
  const { data, loading, error } = useFetchMovies(`movie/${id}`)
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext)
  const navigate = useNavigate()

  if (loading) return (
    <div className="movie-details-page">
      <div className="movie-details-backdrop-skeleton skeleton-shimmer"></div>
      <div className="movie-details-container">
        <div className="movie-details-back-btn-skeleton skeleton-shimmer"></div>
        <div className="movie-details-left">
          <div className="movie-details-poster-skeleton skeleton-shimmer"></div>
        </div>
        <div className="movie-details-right">
          <div className="movie-details-title-skeleton skeleton-shimmer"></div>
          <div className="movie-details-info-skeleton skeleton-shimmer"></div>
          <ul className="genre-list">
            <li className="genre-list-item-skeleton skeleton-shimmer"></li>
            <li className="genre-list-item-skeleton skeleton-shimmer"></li>
          </ul>
          <div className="tagline-skeleton skeleton-shimmer"></div>
          <div className="movie-overview-skeleton skeleton-shimmer"></div>
          <div className="movie-overview-skeleton skeleton-shimmer"></div>
          <div className="movie-overview-skeleton skeleton-shimmer"></div>
          <div className="movie-overview-skeleton skeleton-shimmer"></div>
          <div className="movie-overview-skeleton skeleton-shimmer"></div>
          <div className="movie-details-watchlist-btn-skeleton skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  )

  if (error) return <p>{error}</p>
  if (!data) return null

  const isInWatchlist = watchlist.some((movie) => movie.id === data.id)

  return (
    <div className="movie-details-page">
      {data.backdrop_path && (
        <div
          className="movie-details-backdrop"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}
          role="presentation"
        />
      )}
      <div className={`movie-details-container ${!data.backdrop_path ? "no-backdrop" : ""}`}>
        <button
          onClick={() => navigate(-1)}
          className="movie-details-back-btn"
        >
          &larr; <span>Go back</span>
        </button>
        <div className="movie-details-left">
          <img
            className="movie-details-poster"
            src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : noPosterImage}
            alt={`${data.title} poster`}
          />
        </div>
        <div className="movie-details-right">
          <h1 className="movie-details-title">{data.title}</h1>
          <div className="movie-details-info">
            <p>{data.release_date ? data.release_date.split("-")[0] : "N/A"}</p>
            <span>&bull;</span>
            <p>{data.runtime ? `${data.runtime} mins` : "N/A"}</p>
          </div>
          {data.genres?.length > 0 && ( 
            <ul className="genre-list">
              {data.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          )}
          {data.tagline && <p className="movie-tagline">{data.tagline.toUpperCase()}</p>}
          <p className="movie-overview">{data.overview ? data.overview : "No overview available"}</p>
          <button
            className="movie-details-watchlist-btn"
            type="button"
            onClick={() =>
              isInWatchlist
                ? removeFromWatchlist(data.id)
                : addToWatchlist(data)}
          >
            {isInWatchlist ? "- Remove from watchlist" : "+ Add to watchlist"}
          </button>
        </div>
      </div>
    </div>
  )
}

