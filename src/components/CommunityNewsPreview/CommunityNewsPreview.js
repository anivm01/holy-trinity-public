import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/api'
import { createMarkup } from '../../utils/createMarkup'
import { useLanguage } from '../../utils/LanguageContext'
import Image from '../Image/Image'
import ImageDeliverer from '../ImageDeliverer/ImageDeliverer'
import './CommunityNewsPreview.scss'

function CommunityNewsPreview({item}) { 
  const language = useLanguage()
  return (
    <article className='news-preview'>
      <div className='news-preview__intro'>
        <div className='news-preview__image'>
          {item.src && <img src={item.src} alt={item.description} className="image"/>}
        </div>
        <div className='news-preview__titles'>
          <h3 className='news-preview__title'>{item.title}</h3>
        {item.author.length > 0 && 
          <h4 className='news-preview__author'>{language === "bg" ? "Автор" :" Written by"} {item.author}</h4>
        }
        </div>
      </div>
      <div className='news-preview__content' dangerouslySetInnerHTML={createMarkup(item.content)}></div>
      <Link to={`/community-news/${item.id}`} className='news-preview__link'>Read More</Link>
    </article>
  )
}

export default CommunityNewsPreview