import React from "react";

function Select({ name, label, options, ...rest }) {
  return (
    <React.Fragment>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="">Select Genre</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}

export default Select;
