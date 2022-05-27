import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleMobileMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <nav className='nav'>
            <div className="nav-mobile" onClick={toggleMobileMenu}>
                <svg width="25" height="25" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 14H10V16H0V14ZM0 7H14V9H0V7ZM0 0H20V2H0V0ZM17 11.17V5H22V7H19V14C18.9997 14.6368 18.7967 15.2569 18.4206 15.7707C18.0444 16.2844 17.5145 16.6652 16.9076 16.8578C16.3007 17.0505 15.6482 17.045 15.0446 16.8422C14.441 16.6394 13.9176 16.2498 13.5501 15.7298C13.1826 15.2098 12.9901 14.5864 13.0004 13.9497C13.0107 13.313 13.2234 12.6961 13.6076 12.1883C13.9918 11.6805 14.5276 11.3082 15.1375 11.1251C15.7473 10.942 16.3997 10.9577 17 11.17V11.17Z" fill="#F8F8F8" />
                </svg>
            </div>
            {toggleMenu || screenWidth > 605 ? (
                <div className="nav__links">
                    <NavLink to="/compositor/Mozart" className="nav__link" activeclassname="nav__link_active">Mozart</NavLink>
                    <NavLink to="/compositor/Vivaldi" className="nav__link" activeclassname="nav__link_active">Vivaldi</NavLink>
                    <NavLink to="/compositor/Tchaikovsky" className="nav__link" activeclassname="nav__link_active">Tchaikovsky</NavLink>
                    <NavLink to="/compositor/Paganini" className="nav__link" activeclassname="nav__link_active">Paganini</NavLink>
                    <NavLink to="/compositor/Beethoven" className="nav__link" activeclassname="nav__link_active">Beethoven</NavLink>
                </div>
            ) : null}
        </nav>
    )
}
