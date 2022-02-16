import React, { useState, useEffect } from 'react'

import '../style/burger-menu.css'

export default function BurgerMenu(props) {

    const [menuOpen, setMenuOpen] = useState(props.open)

    useEffect(() => {
        const banner = document.querySelector('.banner'),
            burger = Array.from(document.querySelectorAll('.burger')),
            burgerContainer = document.querySelector('.burger-container'),
            overlay = document.querySelector('.burger-overlay')

        if (!menuOpen) {
            banner.style.setProperty('--banner-portrait-width', '0vw')
            overlay.style.display = 'none'
            burgerContainer.style.transform = 'translateX(0)'
            burger.forEach(element => element.classList.remove('burger-open'))
        }
        else {
            overlay.style.display = 'block'
            banner.style.setProperty('--banner-portrait-width', '50vw')
            burgerContainer.style.transform = 'translateX(35vw)'
            burger.forEach(element => element.classList.add('burger-open'))
        }

    }, [menuOpen])

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className="burger-overlay" onClick={handleClick}></div>
            <div className='burger-container' onClick={handleClick}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
        </>
    )
}
