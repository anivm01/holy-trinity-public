import React from 'react'
import parishPriest from "../../assets/parish-priest.jpg"
import Button from '../UI/Button/Button'
import "./HomeProfile.scss"
export const HomeProfile = () => {
    return (
        <section className="home-profile">
            <div className="home-profile__image-box">
                <img className="home-profile__image" src={parishPriest} alt="Fr. Velichko Mihailov Archpriest of the Bulgarian Orthodox Church - Bulgarian Patriarchate" />
            </div>
            <div className="home-profile__text-box">
                <h2>Fr. Velichko Mihaylov</h2>
                <p>Archpriest of the Bulgarian Orthodox Church</p>
                <Button text="See Full Profile" href="/" buttonComponent="link" />
            </div>
        </section>
    )
}
