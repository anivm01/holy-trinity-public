import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetchImage";
import NoData from "../../components/NoData/NoData";
import PaginationContainer from "../../components/PaginationContainer/PaginationContainer";
import WorshipOfficeItem from "../WorshipOfficeItem/WorshipOfficeItem";
import "./WorshipOfficesList.scss";

function WorshipOfficesList({ url }) {
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
    return (
      <NoData />
    )
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
            return (
              <WorshipOfficeItem key={index} item={single} />
            )
          })}
        </section>
      </PaginationContainer>
    )
  }



  return <NoData />;
}

export default WorshipOfficesList;
