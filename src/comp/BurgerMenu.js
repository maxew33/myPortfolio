import React, { useState, useEffect } from 'react'

import '../style/burger-menu.css'

export default function BurgerMenu(props) {

    const [menuOpen, setMenuOpen] = useState(props.open)

    useEffect(() => {
        const banner = document.querySelector('.banner'),
            burger = Array.from(document.querySelectorAll('.burger')),
            burgerContainer = document.querySelector('.burger-container')

        if (!menuOpen) {
            banner.style.setProperty('--banner-portrait-width', '0vw')
            burgerContainer.style.transform = 'translateX(0)'
            burger.forEach(element => element.classList.remove('burger-open'))
        }
        else {
            banner.style.setProperty('--banner-portrait-width', '50vw')
            burgerContainer.style.transform = 'translateX(35vw)'
            burger.forEach(element => element.classList.add('burger-open'))
        }

    }, [menuOpen])

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='burger-container' onClick={handleClick}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>
    )
}
