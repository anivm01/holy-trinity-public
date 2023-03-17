import React from 'react'
import "./MemorialQuote.scss"
import { useLanguage } from '../../utils/LanguageContext'
import burningCandle from '../../assets/burning-candle.gif'

function MemorialQuote() {
    const language = useLanguage()
  return (
    <div className='memorial-quote'>
        <p className='memorial-quote__text'>
        {language === "bg" ? `Со святими упокой Господи` : `With the Saints give rest, O Christ`}
        </p>
    </div>
  )
}

export default MemorialQuote