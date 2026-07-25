import { useState } from "react"
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import Navigation from "./Navigation"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="site-wrapper">
        <div className="header-content">
          <Navigation 
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <Link to="/" className="logo">
            CineApp
          </Link>
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
