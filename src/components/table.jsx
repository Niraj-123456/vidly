import React from "react";
import Like from "./common/like";

function Table(props) {
  const { movies, doMovieLike, doMovieDelete } = props;
  return (
    <div className="col">
      <table className="table">
        <thead>
          <tr>
            <th>
              Title{" "}
              <span>
                <i className="fas fa-caret-down"></i>
              </span>
            </th>
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
                    onLiked={() => doMovieLike(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <a
                    onClick={() => doMovieDelete(movie)}
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
  );
}

export default Table;
