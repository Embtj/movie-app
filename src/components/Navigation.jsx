import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

export default function Navigation({ menuOpen, setMenuOpen }) {
  return (
    <div className="navigation-container">
      <button 
        className="menu-button"
        onClick={() => setMenuOpen(prev => !prev)} 
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
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
    </div>

  )
}
