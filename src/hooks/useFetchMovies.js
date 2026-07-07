import { useState, useEffect } from "react"

function useFetchMovies(endpoint) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`)

        if (!res.ok) {
          throw new Error("Something went wrong, please try again")
        }

        const data = await res.json()
        setData(data)
        console.log(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return {data, loading, error}
}

export default useFetchMovies