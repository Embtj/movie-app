import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Layout from './components/Layout'
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
