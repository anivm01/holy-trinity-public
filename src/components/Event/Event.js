import React from 'react'
import './Event.scss'

function Event({title, details, date}) {
  return (
    <div className='event'>
      <div className='event__header'>
          <span className='event__date'>{date.month} {date.date}</span>
          <span className='event__date'>{date.year}</span>
      </div>
      <div className='event__main'>
          <h2>{title}</h2>
          <div className='event__details' dangerouslySetInnerHTML={details}></div>
      </div>
    </div>
  )
}

export default Event