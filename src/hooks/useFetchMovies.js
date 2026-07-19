import { useState, useEffect } from "react"

function useFetchMovies(endpoint, params = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const queryParams = new URLSearchParams({
          api_key: API_KEY,
          ...params
        })

        const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?${queryParams.toString()}`)

        if (!res.ok) {
          throw new Error("Something went wrong, please try again")
        }

        const data = await res.json()
        await new Promise(resolve => setTimeout(resolve, 3000))
        setData(data)
        console.log(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, JSON.stringify(params)])

  return {data, loading, error}
}

export default useFetchMovies