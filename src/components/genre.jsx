import React from "react";

function genre(props) {
  const { genres, onGenreSelected, selectedGenre } = props;
  return (
    <React.Fragment>
      <div className="col-3 my-2">
        <ul className="list-group">
          {genres.map((genre) => (
            <li
              style={{ cursor: "pointer" }}
              key={genre._id}
              className={
                genre === selectedGenre
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onGenreSelected(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default genre;
