import React from 'react'
import Image from '../Image/Image'
import './Obituary.scss'
import cross from '../../assets/cross.svg'
import ImageDeliverer from '../ImageDeliverer/ImageDeliverer'
import { API_URL } from '../../utils/api'
import { useLanguage } from '../../utils/LanguageContext'

function Obituary({name, id, years, obituary}) {
  const language = useLanguage()
  return (
    <article className='obituary'>
      <div className='obituary__border'>
        <div className='obituary__top'>
          <div className='obituary__info'>
            <img className='obituary__cross' src={cross} alt="cross"/>
            <h3 className='obituary__name'>{name}</h3>
            <h4 className='obituary__years' >{years}</h4>
          </div>
          <div className='obituary__image'>
            <ImageDeliverer url={`${API_URL}/deceased/${language}/${id}`} />
          </div>
        </div>
        <div className='obituary__content' dangerouslySetInnerHTML={obituary}></div>
      </div>
    </article>

  )
}

export default Obituary