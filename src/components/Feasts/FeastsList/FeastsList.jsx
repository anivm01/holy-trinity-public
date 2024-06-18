import React from "react";
import "./FeastsList.scss";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../../NoData/NoData";
import FeastsListItem from "../FeastsListItem/FeastsListItem";
import { useFeasts } from "../../../queries";

function FeastsList() {
  const { data, loading, error } = useFeasts();

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
      <section className="feasts-list">
        {data.map((single, index) => {
          return <FeastsListItem key={index} item={single} />;
        })}
      </section>
    );
  }
  return <NoData />;
}

export default FeastsList;
