import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/api'
import { useLanguage } from '../../utils/LanguageContext'
import ImageDeliverer from '../ImageDeliverer/ImageDeliverer'
import './CommunityNewsPreview.scss'

function CommunityNewsPreview({title, content, id}) { 
  const language = useLanguage()
  return (
    <article className='news-preview'>
      <h3 className='news-preview__title'>{title}</h3>
      <div className='news-preview__image'>
        <ImageDeliverer url={`${API_URL}/featured-image/${language}/${id}`} />
      </div>
      <div className='news-preview__content' dangerouslySetInnerHTML={content}></div>
      <Link to={`/community-news/${id}`} className='news-preview__link'>Read More</Link>
    </article>
  )
}

export default CommunityNewsPreview