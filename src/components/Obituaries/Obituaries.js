import React, { useMemo, useState } from "react";
import Obituary from "../Obituary/Obituary";
import "./Obituaries.scss";
import { useLanguage } from "../../utils/LanguageContext";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../NoData/NoData";
import useFetch from "../../utils/useFetchImage";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import { API_URL } from "../../utils/api";
import { hasLocalizedObituary } from "../../utils/obituaryLocalization";

function Obituaries() {
  const language = useLanguage();
  const { data, loading, error } = useFetch(`${API_URL}/obituaries`);
  const [dataPerPage, setDataPerPage] = useState([]);
  const localizedData = useMemo(
    () =>
      Array.isArray(data)
        ? data.filter((obituary) =>
            hasLocalizedObituary(obituary, language)
          )
        : [],
    [data, language]
  );

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
  if (localizedData.length) {
    return (
      <PaginationContainer
        key={language}
        data={localizedData}
        numberOfPostsPerPage={10}
        setDataPerPage={setDataPerPage}
      >
        <section className="obituaries">
          {dataPerPage.map((single) => {
            return <Obituary key={single.id} item={single} />;
          })}
        </section>
      </PaginationContainer>
    );
  }
  return <NoData />;
}

export default Obituaries;
