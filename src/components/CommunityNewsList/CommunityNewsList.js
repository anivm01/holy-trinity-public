import React, { useState } from "react";
import "./CommunityNewsList.scss";
import CommunityNewsPreview from "../CommunityNewsPreview/CommunityNewsPreview";
import NoData from "../NoData/NoData";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetch";
import PaginationContainer from "../PaginationContainer/PaginationContainer";

function CommunityNewsList({ url }) {
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
    console.log(data);
    return (
      <section>
        <PaginationContainer
          data={data}
          numberOfPostsPerPage={6}
          setDataPerPage={setDataPerPage}
        >
          <div className="community-news-list">
            {dataPerPage.map((single, index) => {
              return <CommunityNewsPreview key={index} item={single} />;
            })}
          </div>
        </PaginationContainer>
      </section>
    );
  }
  return <NoData />;
}

export default CommunityNewsList;
