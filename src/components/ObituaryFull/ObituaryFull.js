import React from "react";
import "./ObituaryFull.scss";
import cross from "../../assets/cross.svg";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../utils/useFetchImage";
import NoData from "../NoData/NoData";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import MemorialQuote from "../MemorialQuote/MemorialQuote";

function ObituaryFull() {
  const params = useParams();
  const language = useLanguage();
  const { data, loading, error } = useFetch(
    `${API_URL}/obituary/${language}/${params.id}`
  );

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
    if(data.name === "") {
      return <NoData />
    }
    return (
      <div className="obituary-full__container">
      <article className="obituary-full">
        <div className="obituary-full__border">
          <div className="obituary-full__top">
            <div className="obituary-full__info">
              <img className="obituary-full__cross" src={cross} alt="cross" />
              <h3 className="obituary-full__name">{data.name}</h3>
              <h4 className="obituary-full__years">{data.years}</h4>
            </div>
            <div className="obituary-full__image">
              <img src={data.src} alt={data.description} className="image" />
            </div>
          </div>
          <div
            className="obituary-full__content"
            dangerouslySetInnerHTML={createMarkup(data.obituary)}
          ></div>
          <Link />
        </div>
      </article>
      <MemorialQuote />
      </div>
    );
  }
  return <NoData />;
}

export default ObituaryFull;
