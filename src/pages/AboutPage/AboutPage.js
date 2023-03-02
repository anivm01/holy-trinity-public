import React from 'react'
import './AboutPage.scss'
import Hero from '../../components/Hero/Hero'
import HeroBg from '../../components/Hero/HeroBg'
import aboutHero from '../../assets/church.jpg'
import { useLanguage } from '../../utils/LanguageContext'

function AboutPage() {
    const language = useLanguage()
  return (
    <main>
        {language === "bg" ? <HeroBg image={aboutHero} title={"За Нас"}/> : <Hero image={aboutHero} title={"About Us"}/>}
    </main>
  )
}

export default AboutPage