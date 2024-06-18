import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../../NoData/NoData";
import "./BroadcastsList.scss";
import BroadcastsListItem from "../BroadcastsListItem/BroadcastsListItem";
import PaginationContainer from "../../PaginationContainer/PaginationContainer";
import { useBroadcasts } from "../../../queries";

const BroadcastsList = () => {
  const { data, error, isLoading } = useBroadcasts();
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
        numberOfPostsPerPage={17}
        setDataPerPage={setDataPerPage}
      >
        <section className="worship-offices-list">
          {dataPerPage.map((single, index) => {
            return <BroadcastsListItem key={index} item={single} />;
          })}
        </section>
      </PaginationContainer>
    );
  }

  return <NoData />;
};

export default BroadcastsList;
