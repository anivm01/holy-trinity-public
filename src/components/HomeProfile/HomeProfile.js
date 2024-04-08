import React from 'react'
import parishPriest from "../../assets/parish-priest.jpg"
import "./HomeProfile.scss"
import { useLanguage } from '../../utils/LanguageContext'
import { parishPriestSection } from '../../data/homePageData'
import { Link } from 'react-router-dom'
export const HomeProfile = () => {
    const language = useLanguage()
    return (
        <section className="home-profile">
            <div className="home-profile__image-box">
                <img className="home-profile__image" src={parishPriest} alt="Fr. Velichko Mihailov Archpriest of the Bulgarian Orthodox Church - Bulgarian Patriarchate" />
            </div>
            <div className="home-profile__text-background">
                <div className="home-profile__text-box">
                    <h2>{parishPriestSection.name[language]}</h2>
                    <p>{parishPriestSection.shortBio[language]}</p>
                    <Link className="home-profile__link" to="/parish-priest">{parishPriestSection.link[language]}</Link>
                </div>
            </div>
        </section>
    )
}
