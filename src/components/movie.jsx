import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div className="m-3">
        <h3>There are 9 movies in database.</h3>
        <table className="table my-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              console.log(movie);
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <a className="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
