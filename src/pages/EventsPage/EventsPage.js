import React, { useEffect } from 'react'
import './EventsPage.scss'
import Hero from '../../components/Hero/Hero'
import HeroBg from '../../components/Hero/HeroBg'
import eventsHero from '../../assets/event.jpg'
import { useLanguage } from '../../utils/LanguageContext'
import Events from '../../components/Events/Events'
import useFetch from '../../utils/useFetch'
import { API_URL } from '../../utils/api'


function EventsPage() {
    const language = useLanguage()
    const {data, loading, error} = useFetch(`${API_URL}/event/${language}`)
  return (
    <main>
        {language === "bg" ? <HeroBg image={eventsHero} title={"Присъединете се към нас за едно от нашите забавни събития!"}/> : <Hero image={eventsHero} title={"Join us for one of our wonderful community events!"}/>}
        <Events data={data}/>
    </main>
  )
}

export default EventsPage