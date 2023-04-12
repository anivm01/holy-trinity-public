import React from 'react'
import './CommunityNewsFull.scss'
import { ThreeDots } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../utils/api'
import { useLanguage } from '../../utils/LanguageContext'
import useFetch from '../../utils/useFetch'
import ImageDeliverer from '../ImageDeliverer/ImageDeliverer'
import NoData from '../NoData/NoData'
import { createMarkup } from '../../utils/createMarkup'
import Image from '../Image/Image'

function CommunityNewsFull() {
    const params = useParams()
    const language = useLanguage()
    const {data, loading, error} = useFetch(`${API_URL}/article/${language}/${params.id}`)  
    
    if(loading){
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
    if(error){
      return <NoData />;
    }
    if(data) {
      const content = createMarkup(data.content)
      if(data.title === "" || content.__html.length <8) {
        return <NoData />
      }
      return (
        <article className='community-news-full'>
          <div className='community-news-full__background'>
            <h3 className='community-news-full__title'>{data.title}</h3>
            {data.author && <h4 className='community-news-full__author'>
              {language === "bg" ? "Автор:" : "Written by:"} {data.author}</h4> }
            <div className='community-news-full__image'>
              <img className='image' src={data.src} alt={data.description} />
            </div>
            <div className='community-news-full__content' dangerouslySetInnerHTML={content}></div>
          </div>
        </article>
      )
    }
    return <NoData />;

  
}

export default CommunityNewsFull