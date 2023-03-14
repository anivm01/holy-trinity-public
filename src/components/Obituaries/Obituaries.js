import React from 'react'
import Obituary from '../Obituary/Obituary';
import "./Obituaries.scss"
import { createMarkup } from "../../utils/createMarkup";
import { removeFuture } from '../../utils/limitData';
import { useLanguage } from '../../utils/LanguageContext';

function Obituaries({data}) {
  const language = useLanguage()
  if(!data) {
    return <p>Loading...</p>
  }
  const latestData = removeFuture(data)
    return (
      <section className="events">
        {latestData.map((single, index) => {
          return (
            <Obituary
              key={index}
              name={single.name}
              years={single.years}
              id={language === "bg" ? single.en_id : single.id}
              obituary={createMarkup(single.obituary)}
            />
          );
        })}
      </section>
    );
}

export default Obituaries