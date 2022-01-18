import React, { useState, useEffect } from "react";
import { getGenres } from "../fakeGenreService";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, saveMovie } from "../fakeMovieService";
// import { renderSelect } from "../utils/utils";

const MovieForm = () => {
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState({
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const movieGenres = getGenres();
    setGenres(movieGenres);

    const movieId = params.id;
    if (!movieId) return;

    const movieObj = getMovie(movieId);
    if (!movieObj) return navigate("/not-found");
    setMovie(mapToViewModel(movieObj));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({
      ...movie,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Saved");

    saveMovie(movie);
    navigate("/");
  };

  const mapToViewModel = (m) => {
    return {
      _id: m._id,
      title: m.title,
      genreId: m.genre._id,
      numberInStock: m.numberInStock,
      dailyRentalRate: m.dailyRentalRate,
    };
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-2">
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger text-center">
              Add or Update Movies
            </li>
          </ul>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 offset-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                value={movie.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                className="form-select"
                name="genreId"
                id="genre"
                value={movie.genreId}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre._id} value={genre._id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="numberInStock" className="form-label">
                Stock
              </label>
              <input
                className="form-control"
                type="text"
                id="numberInStock"
                name="numberInStock"
                value={movie.numberInStock}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dailyRentalRate" className="form-label">
                Rate
              </label>
              <input
                type="text"
                className="form-control"
                id="dailyRentalRate"
                name="dailyRentalRate"
                value={movie.dailyRentalRate}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
