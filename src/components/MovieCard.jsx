import { Link } from "react-router"

export default function MovieCard(props) {
  return (
    <Link to={`/movie/${props.id}`}>
      <article className="movie-card">
        <img src={props.poster} alt={`${props.title} poster`} className="movie-poster" /> 
        <div className="movie-card-text">
          <h2 className="movie-title">{props.title}</h2>
          <p className="movie-year">{props.year}</p>
        </div> 
      </article>
    </Link>
  )
}
