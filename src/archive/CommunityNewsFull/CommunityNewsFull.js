import React from "react";
import "./CommunityNewsFull.scss";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetch";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import NoData from "../../components/NoData/NoData";
import { createMarkup } from "../../utils/createMarkup";
import Image from "../Image/Image";
import Masonry from "react-responsive-masonry";

function CommunityNewsFull() {
  const params = useParams();
  const language = useLanguage();
  const { data, loading, error } = useFetch(
    `${API_URL}/article/${language}/${params.id}`
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
  if (data) {
    const content = createMarkup(data.entry_data.content);
    if (data.entry_data.title === "" || content.__html.length < 8) {
      return <NoData />;
    }
    return (
      <article className="community-news-full">
        <div className="community-news-full__background">
          <h3 className="community-news-full__title">
            {data.entry_data.title}
          </h3>
          {data.entry_data.author && (
            <h4 className="community-news-full__author">
              {language === "bg" ? "Автор:" : "Written by:"}{" "}
              {data.entry_data.author}
            </h4>
          )}
          <div className="community-news-full__image">
            <img
              className="image"
              src={data.entry_data.src}
              alt={data.entry_data.description}
            />
          </div>
          <div
            className="community-news-full__content"
            dangerouslySetInnerHTML={content}
          ></div>
          {data.image_gallery.length > 0 && (
            <Masonry columnsCount={2} gutter="2rem">
              {data.image_gallery.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      className="image"
                      src={image.src}
                      alt={image.description}
                    />
                  </div>
                );
              })}
            </Masonry>
          )}
        </div>
      </article>
    );
  }
  return <NoData />;
}

export default CommunityNewsFull;
