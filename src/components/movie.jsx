import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Like from "./common/like";

class Movie extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    const count = this.state.movies.length;
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h3 className="text-center">
              There are {count} movies in database.
            </h3>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3 my-2">
            <ul className="list-group">
              {this.state.genres.map((genre) => (
                <li key={genre._id} className="list-group-item">
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
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
                {this.state.movies.map((movie) => {
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
      </div>
    );
  }
}

export default Movie;
