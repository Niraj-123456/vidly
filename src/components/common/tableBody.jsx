import React from "react";
import Like from "./like";
import { Link } from "react-router-dom";

function TableBody({ movies, movieLike, movieDelete }) {
  return (
    <React.Fragment>
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id}>
              <td>
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onLiked={() => movieLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <a
                  onClick={() => movieDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}

export default TableBody;
