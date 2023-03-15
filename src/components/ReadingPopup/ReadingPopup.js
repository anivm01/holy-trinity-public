import React from 'react'
import './ReadingPopup.scss'
import close from "../../assets/close.svg"

function ReadingPopup({content, setPopupVisible}) {
  return (
    <div className='reading-popup'>
        <button className='reading-popup__close' onClick={()=>setPopupVisible(false)}>
            <img className='reading-popup__icon' src={close} alt="close"/>
        </button>
        <div className='reading-popup__content' dangerouslySetInnerHTML={content}>
        </div>
    </div>
  )
}

export default ReadingPopup