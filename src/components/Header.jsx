import { useState, useEffect } from "react"
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import Navigation from "./Navigation"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu after resize
  useEffect(() => {
    function handleResize() {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches

      if (isDesktop) {
        setMenuOpen(false)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
