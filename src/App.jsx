import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Layout from './components/Layout'
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"
import MovieDetails from "./pages/MovieDetails"
import WatchlistProvider from "./components/WatchlistProvider"



export default function App() {
  return (
    <BrowserRouter>
      <WatchlistProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="search" element={<Search />} />
            <Route path="watchlist" element={<Watchlist />} />
          </Route>
        </Routes>
      </WatchlistProvider>
    </BrowserRouter>
  )
}
