import React from "react";

function TableHeader({ columns, sortColumn, sortMovie }) {
  const raiseSort = (path) => {
    const sort = { ...sortColumn };
    if (sort.path === path) {
      sort.order = sort.order === "asc" ? "desc" : "asc";
    } else {
      sort.path = path;
      sort.order = "asc";
    }
    sortMovie(sort);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fas fa-sort-up"></i>;
    return <i className="fas fa-sort-down"></i>;
  };
  return (
    <React.Fragment>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {column.label && renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  );
}

export default TableHeader;
