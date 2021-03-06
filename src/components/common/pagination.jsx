import React from "react";
import propTypes from "prop-types";
import _ from "lodash";

function Pagination(props) {
  const { itemCounts, pageSize, currentPage, onPageChange } = props;
  const pageCounts = Math.ceil(itemCounts / pageSize);
  if (pageCounts === 1) return null;
  const pages = _.range(1, pageCounts + 1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  itemCounts: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
