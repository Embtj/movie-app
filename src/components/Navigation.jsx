import { Link } from 'react-router'

export default function Navigation({ menuOpen }) {
  return (
    menuOpen && (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="search">Search</Link>
          </li>
          <li>
            <Link to="watchlist">Watchlist</Link>
          </li>
        </ul>
      </nav>
    )
  )
}
