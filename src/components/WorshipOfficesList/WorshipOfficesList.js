import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { removeFuture } from "../../utils/limitData";
import useFetch from "../../utils/useFetchImage";
import NoData from "../NoData/NoData";
import WorshipOfficeItem from "../WorshipOfficeItem/WorshipOfficeItem";
import "./WorshipOfficesList.scss";

function WorshipOfficesList({ url }) {
  const { data, loading, error } = useFetch(url);

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
  if(error) {
    return (
        <NoData />
    )
  }
  if(data){
    const videos = removeFuture(data)
    return (
        <section className="worship-offices-list">
            {videos.map((single, index)=> {
                return (
                    <WorshipOfficeItem key={index} item={single}/>
                )
            })}
        </section>
    )
  }



  return <NoData />;
}

export default WorshipOfficesList;
