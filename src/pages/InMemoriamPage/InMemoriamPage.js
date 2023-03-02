import React from 'react'
import './InMemoriamPage.scss'
import Hero from '../../components/Hero/Hero'
import HeroBg from '../../components/Hero/HeroBg'
import memoriamHero from '../../assets/candles.jpg'
import { useLanguage } from '../../utils/LanguageContext'

function InMemoriamPage() {
    const language = useLanguage()
  return (
    <main>
        {language === "bg" ? <HeroBg image={memoriamHero} title={"Добре Дошли!"}/> : <Hero image={memoriamHero} title={"Welcome"}/>}
        
    </main>
  )
}

export default InMemoriamPage