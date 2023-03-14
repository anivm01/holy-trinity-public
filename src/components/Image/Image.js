import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { API_URL } from '../../utils/api'
import useFetchImage from '../../utils/useFetchImage'
import placeholder from "../../assets/placeholder.svg";

function Image({url}) {
    
    const {data, loading, error} = useFetchImage(url)

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
    <img className='image' src={placeholder} alt="placeholder" />;
  }

  if (data) {
    return (
      <img className='image' src={`${API_URL}${data.url}`} alt={data.description}/>
      )
  }
  return <img className='image' src={placeholder} alt="placeholder" />;
}

export default Image