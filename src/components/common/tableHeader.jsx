import React from "react";

function TableHeader({ columns, sortColumn, sortMovie }) {
  const raiseSort = (path) => {
    const sortColumn = { ...sortColumn };
    if (sortColumn === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    sortMovie(sortColumn);
  };
  return (
    <React.Fragment>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  );
}

export default TableHeader;
