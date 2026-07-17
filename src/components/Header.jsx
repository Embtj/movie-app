import { useState } from "react"
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import SearchBar from './SearchBar'
import Navigation from "./Navigation"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="header-content">
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button" aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/">
          CineApp
        </Link>
        <SearchBar />
      </div>
      <Navigation menuOpen={menuOpen} />
    </header>
  )
}
