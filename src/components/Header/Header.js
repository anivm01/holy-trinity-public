import React from 'react'
import './Header.scss'
import logoEn from '../../assets/church-logo-en.png'
import logoBg from '../../assets/church-logo-bg.png'
import { Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import navIcon from '../../assets/nav-icon.svg'

function Header() {
  return (
    <header className='header'>
        <div className='header__top'>
            <Link to="/" className='header__home' >
                <img className='header__logo' src={logoEn} />
            </Link>
            <MainNav/>
            {/* <button className='header__mobile'>
                <img src={navIcon} className='header__nav'/>
            </button> */}
        </div>
        <div className='header__bottom'>
            <h1 className='header__title'>Holy Trinity Macedono-Bulgarian Christian Orthodox Church</h1>
        </div>
    </header>
  )
}

export default Header