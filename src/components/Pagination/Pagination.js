import React from "react";
import "./Pagination.scss";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";

function Pagination({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  nextPage,
  previousPage,
}) {
  let pageNumbers = [];
  const numberOfPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length === 1) {
    return
  }
  if (pageNumbers.length > 5) {
    if (
      currentPage !== pageNumbers[0] &&
      currentPage !== pageNumbers[1] &&
      currentPage !== pageNumbers[pageNumbers.length - 2] &&
      currentPage !== pageNumbers[pageNumbers.length - 1]
    ) {
      pageNumbers = [
        pageNumbers[0],
        pageNumbers[1],
        currentPage,
        pageNumbers[pageNumbers.length - 2],
        pageNumbers[pageNumbers.length - 1],
      ];
    } else {
      pageNumbers = [
        pageNumbers[0],
        pageNumbers[1],
        pageNumbers[pageNumbers.length - 2],
        pageNumbers[pageNumbers.length - 1],
      ];
    }
  }

  return (
    <div className="pagination">
      <img
        onClick={previousPage}
        className="pagination__icon"
        src={previous}
        alt="previous"
      />
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`pagination__number ${
              currentPage === number ? "pagination__number--active" : ""
            }  ${
                (number === 2 && currentPage !== 3)
                  ? "pagination__number--dots-after"
                  : ""
              }           
            ${
              (number >= 3 && number <= numberOfPages - 3)
                ? "pagination__number--dots-after"
                : ""
            } `}
          >
            {number}
          </li>
        ))}
      </ul>
      <img
        onClick={nextPage}
        className="pagination__icon"
        src={next}
        alt="next"
      />
    </div>
  );
}

export default Pagination;
