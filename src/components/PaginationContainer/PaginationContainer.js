import React, { useEffect, useState } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import Pagination from "../Pagination/Pagination";

function PaginationContainer({ data, children, numberOfPostsPerPage, setDataPerPage }) {
  const language = useLanguage()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(numberOfPostsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const changeCurrentPosts = (data) => data.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(()=>{ setDataPerPage(changeCurrentPosts(data)) }, [data, indexOfFirstPost, indexOfLastPost, language])


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      {children}
    </div>
  );
}

export default PaginationContainer;
