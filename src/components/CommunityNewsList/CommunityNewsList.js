import React, { useState } from "react";
import "./CommunityNewsList.scss";
import { createMarkup } from "../../utils/createMarkup";
import CommunityNewsPreview from "../CommunityNewsPreview/CommunityNewsPreview";
import NoData from "../NoData/NoData";
import { useLanguage } from "../../utils/LanguageContext";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetch";
import Pagination from "../Pagination/Pagination";
import PaginationContainer from "../PaginationContainer/PaginationContainer";

function CommunityNewsList({ url }) {
  const language = useLanguage();
  const { data, loading, error } = useFetch(url);
  const [dataPerPage, setDataPerPage] = useState([]);

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6F0B20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  if (error) {
    return <NoData />;
  }

  if (data) {
    return (
      <section>
        <PaginationContainer
          data={data}
          numberOfPostsPerPage={1}
          setDataPerPage={setDataPerPage}
        >
          <div className="community-news-list">
            {dataPerPage.map((single, index) => {
              return (
                <CommunityNewsPreview
                  key={index}
                  title={single.title}
                  content={createMarkup(single.content)}
                  author={single.author}
                  id={language === "bg" ? single.en_id : single.id}
                />
              );
            })}
          </div>
        </PaginationContainer>
      </section>
    );
  }
  return <NoData />;
}

export default CommunityNewsList;
