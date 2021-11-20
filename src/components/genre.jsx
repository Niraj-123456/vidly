import React from "react";

function genre(props) {
  return (
    <React.Fragment>
      <div className="col-3 my-2">
        <ul className="list-group">
          {props.genres.map((genre) => (
            <li
              key={genre._id}
              className="list-group-item"
              onClick={() => props.onGenreSelected(genre.name)}
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
