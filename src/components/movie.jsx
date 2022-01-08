import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Table from "./table";
import Genre from "./genre";
import _ from "lodash";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
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

  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
    console.log(path);
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((g) => g.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

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
              <Table
                movies={movies}
                doMovieLike={this.handleLike}
                doMovieDelete={this.handleDelete}
                onMovieSort={this.handleSort}
                sortColumn={sortColumn}
              />
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
