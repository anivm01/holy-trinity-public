import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../../NoData/NoData";
import "./VideosPageList.scss";
import PaginationContainer from "../../PaginationContainer/PaginationContainer";
import { useVideos } from "../../../queries";
import VideosPageListItem from "../VideosPageListItem/VideosPageListItem";

const VideosPageList = () => {
  const { data, error, isLoading } = useVideos();
  const [dataPerPage, setDataPerPage] = useState([]);

  if (isLoading) {
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
      <PaginationContainer
        data={data}
        numberOfPostsPerPage={8}
        setDataPerPage={setDataPerPage}
      >
        <section className="videos-page-list">
          {dataPerPage.map((single, index) => {
            return <VideosPageListItem key={index} item={single} />;
          })}
        </section>
      </PaginationContainer>
    );
  }

  return <NoData />;
};

export default VideosPageList;
