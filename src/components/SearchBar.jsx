import { useState } from 'react'
import { useNavigate } from "react-router"

export default function SearchBar() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return

    const params = new URLSearchParams({ q: query })
    navigate(`/search?${params.toString()}`)
  }


  return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Batman"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
  )
}
