import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Genre from "./genre";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    pageSize: 4,
  };

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
  handleGenreSelected = (genre) => {
    console.log("Genre selected", genre);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);
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
                  There are {count} movies in database.
                </h3>
              </div>
            </div>
            <div className="row my-3">
              <Genre
                genres={this.state.genres}
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
          itemCounts={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movie;
