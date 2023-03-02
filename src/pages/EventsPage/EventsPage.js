import React from 'react'
import './EventsPage.scss'
import Hero from '../../components/Hero/Hero'
import HeroBg from '../../components/Hero/HeroBg'
import eventsHero from '../../assets/event.jpg'
import { useLanguage } from '../../utils/LanguageContext'

function EventsPage() {
    const language = useLanguage()
  return (
    <main>
        {language === "bg" ? <HeroBg image={eventsHero} title={"Присъединете се към нас за едно от нашите забавни събития!"}/> : <Hero image={eventsHero} title={"Join us for one of our wonderful community events!"}/>}
    </main>
  )
}

export default EventsPage