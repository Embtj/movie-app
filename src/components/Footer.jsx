import React from 'react'
import tmdbLogo from "../assets/tmdb-logo.svg"

function Footer() {
  return (
    <div className="footer">
      <img src={tmdbLogo} alt="TMDB logo" className="tmdb-logo" />
      <p className="tmdb-attribution">This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
      <p className="copyright-text">© 2026 Embla Johansen</p>
    </div>
  )
}

export default Footer
