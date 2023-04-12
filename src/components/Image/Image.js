import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import useFetchImage from '../../utils/useFetchImage'

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
    return false;
  }

  if (data) {
    return (
      <img className='image' src={data.src} alt={data.description}/>
      )
  }
 
  return false;
}

export default Image