import { Link } from "react-router"

export default function MovieCard(props) {
  return (
    <Link to={`/movie/${props.id}`}>
      <article className="movie-card">
        <img src={props.poster} alt="movie poster" className="movie-poster" />  
        <h2 className="movie-title">{props.title}</h2>
        <p className="movie-year">{props.year}</p>
      </article>
    </Link>
  )
}
