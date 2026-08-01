import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router"
import useMediaQuery from "../hooks/useMediaQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({ searchOpen, setSearchOpen }) {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const inputRef = useRef(null)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return

    const params = new URLSearchParams({ q: query })
    navigate(`/search?${params.toString()}`)
  }

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("")
    }
  }, [location.pathname])

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus()
    }
  }, [searchOpen])

  function handleSearchClick() {
      setSearchOpen(true)
  }
  
  const shouldSubmit = isDesktop || searchOpen;

  return (
    <form className={`search-bar ${searchOpen ? "open" : ""}`} onSubmit={handleSubmit}>
        <input
        ref={inputRef} 
          type="text" 
          className="search-input" 
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type={shouldSubmit ? "submit" : "button"}
          className="search-btn"
          onClick={shouldSubmit ? undefined : handleSearchClick}
          aria-expanded={searchOpen}
          aria-label={shouldSubmit ? "Search" : "Open search"}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
  )
}
