import React from "react";

function MovieForm() {
  const saveMovie = (e) => {
    e.preventDefault();
    console.log("Movie Save");
  };
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-2">
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger text-center">
              Add or Update Movie
            </li>
          </ul>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 offset-3">
          <form onSubmit={() => saveMovie}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <input type="text" className="form-control" id="genre" />
            </div>
            <div className="mb-3">
              <label htmlFor="numberInStock" className="form-label">
                Stock
              </label>
              <input type="text" className="form-control" id="numberInStock" />
            </div>
            <div className="mb-3">
              <label htmlFor="dailyRentalRate" className="form-label">
                Rate
              </label>
              <input
                type="text"
                className="form-control"
                id="dailyRentalRate"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MovieForm;
