import { useState, useEffect } from "react"
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import Navigation from "./Navigation"
import useMediaQuery from "../hooks/useMediaQuery"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
      if (isDesktop) {
        setMenuOpen(false)
        setSearchOpen(false)
      }
  }, [isDesktop])

  return (
    <header>
      <div className="site-wrapper">
        <div className={`header-content ${searchOpen ? "search-open" : ""}`}>
          <Navigation 
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          {!searchOpen &&
          <Link to="/" className="logo">
            CineApp
          </Link>
          }
          <SearchBar
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
          />
        </div>
      </div>
    </header>
  )
}
