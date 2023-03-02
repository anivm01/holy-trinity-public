import React from 'react'
import './HomePage.scss'
import Hero from '../../components/Hero/Hero'
import homeHero from '../../assets/iconostas.jpg'
import { useLanguage } from '../../utils/LanguageContext'
import HeroBg from '../../components/Hero/HeroBg'

function HomePage() {
    const language = useLanguage()
  return (
    <main>
        {language === "bg" ? <HeroBg image={homeHero} title={"Добре Дошли!"}/> : <Hero image={homeHero} title={"Welcome"}/>}
        
    </main>
  )
}

export default HomePage