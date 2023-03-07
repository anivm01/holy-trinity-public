import React from 'react'
import './InMemoriamPage.scss'
import Hero from '../../components/Hero/Hero'
import HeroBg from '../../components/Hero/HeroBg'
import memoriamHero from '../../assets/candles.jpg'
import { useLanguage } from '../../utils/LanguageContext'
import { API_URL } from '../../utils/api'
import useFetch from '../../utils/useFetch'
import Obituaries from '../../components/Obituaries/Obituaries'

function InMemoriamPage() {
    const language = useLanguage()
    const {data, loading, error} = useFetch(`${API_URL}/obituary/${language}`)

  return (
    <main>
        {language === "bg" ? <HeroBg image={memoriamHero} title={"Добре Дошли!"}/> : <Hero image={memoriamHero} title={"Welcome"}/>}
        <Obituaries data={data}/>
    </main>
  )
}

export default InMemoriamPage