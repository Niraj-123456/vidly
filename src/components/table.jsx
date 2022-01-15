import React from "react";
import TableBody from "./common/tableBody";
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
        <TableBody
          movies={movies}
          movieLike={doMovieLike}
          movieDelete={doMovieDelete}
        />
      </table>
    </div>
  );
}

export default Table;
