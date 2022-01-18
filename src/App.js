// import "./App.css";
import Movie from "./components/movie";
import Navbar from "./components/navbar";
import MovieForm from "./components/movieForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="movies/new" element={<MovieForm />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route index element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
