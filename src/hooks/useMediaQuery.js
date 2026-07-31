import { useState, useEffect } from "react"


function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    function handleChange() {
      setMatches(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

export default useMediaQuery