import React from "react";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetchImage";
import Image from "../Image/Image";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";

function ImageDeliverer({ url, placeholder }) {
  const language = useLanguage();
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

  if (error) {
    if (placeholder) {
      return <img className="image" src={placeholder} alt="placeholder" />;
    }
    return false;
  }

  if (data) {
    return (
      <Image
        url={`${API_URL}/images/${language}/${data.image_id}`}
        placeholder={placeholder}
      />
    );
  }
  return false;
}

export default ImageDeliverer;
