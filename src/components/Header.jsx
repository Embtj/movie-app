import React from 'react'

export default function Header() {
  return (
    <header>
      <form className="search-bar">
        <input type="text" className="search-input" plasceholder="Batman" />
        <button className="search-btn">Search</button>
      </form>
    </header>
  )
}
