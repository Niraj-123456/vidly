import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

function Table(props) {
  const { movies, sortColumn, doMovieLike, doMovieDelete, onMovieSort } = props;
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rating" },
    { key: "like" },
    { key: "delete" },
  ];
  return (
    <div className="col">
      <table className="table">
        <TableHeader
          columns={columns}
          sortMovie={onMovieSort}
          sortColumn={sortColumn}
        />
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
