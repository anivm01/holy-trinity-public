import React, { useState } from "react";
import Obituary from "../Obituary/Obituary";
import "./Obituaries.scss";
import { createMarkup } from "../../utils/createMarkup";
import { useLanguage } from "../../utils/LanguageContext";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../NoData/NoData";
import useFetch from "../../utils/useFetchImage";
import PaginationContainer from "../PaginationContainer/PaginationContainer";


function Obituaries({ url }) {
  const language = useLanguage();
  const { data, loading, error } = useFetch(url);
  const [dataPerPage, setDataPerPage] = useState([]);


  if (loading) {
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#6F0B20"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: "center" }}
      wrapperClassName=""
      visible={true}
    />;
  }
  if (error) {
    return <NoData />;

  }
  if (data) {
    return (
      <PaginationContainer
      data={data}
      numberOfPostsPerPage={10}
      setDataPerPage={setDataPerPage}
    >
      <section className="events">
        {dataPerPage.map((single, index) => {
          return (
            <Obituary
              key={index}
              name={single.name}
              years={single.years}
              id={language === "bg" ? single.en_id : single.id}
              obituary={createMarkup(single.obituary)}
            />
          );
        })}
      </section>
      </PaginationContainer>
    );
  }
  return <NoData />;
}

export default Obituaries;
