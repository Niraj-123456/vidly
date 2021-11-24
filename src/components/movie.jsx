import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Genre from "./genre";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "",
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((g) => g.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="container my-3">
        {count === 0 ? (
          <div className="row">
            <div className="col">
              <h3 className="text-center">There are no movies in database.</h3>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="row">
              <div className="col">
                <h3 className="text-center">
                  There are {filtered.length} movies in database.
                </h3>
              </div>
            </div>
            <div className="row my-3">
              <Genre
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreSelected={this.handleGenreSelected}
              />
              <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rating</th>
                      <th>Like</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie) => {
                      return (
                        <tr key={movie._id}>
                          <td>{movie.title}</td>
                          <td>{movie.genre.name}</td>
                          <td>{movie.numberInStock}</td>
                          <td>{movie.dailyRentalRate}</td>
                          <td>
                            <Like
                              onLiked={() => this.handleLike(movie)}
                              liked={movie.liked}
                            />
                          </td>
                          <td>
                            <a
                              onClick={() => this.handleDelete(movie)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </React.Fragment>
        )}
        <Pagination
          itemCounts={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movie;
