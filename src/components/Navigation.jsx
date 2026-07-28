import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

export default function Navigation({ menuOpen, setMenuOpen }) {
  
  function handleClickLink() {
    setMenuOpen(false)
  }

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
            <Link onClick={handleClickLink} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={handleClickLink} to="search">Search</Link>
          </li>
          <li>
            <Link onClick={handleClickLink} to="watchlist">Watchlist</Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}
