import React, { useState } from 'react'

import '../style/burger-menu.css'

export default function BurgerMenu() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        const banner = document.querySelector('.banner'),
            burger = Array.from(document.querySelectorAll('.burger')),
            burgerContainer = document.querySelector('.burger-container')

        if(menuOpen){
            banner.style.width = '0vw'
            burgerContainer.style.transform = 'translateX(0)'
            burger.forEach(element => element.classList.remove('burger-open'))
        }
        else{
            banner.style.width = '50vw'
            burgerContainer.style.transform = 'translateX(40vw)'
            burger.forEach(element => element.classList.add('burger-open'))
        }

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
