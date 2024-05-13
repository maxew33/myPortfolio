import React, { useState } from 'react'

import '../style/burger-menu.css'

export default function BurgerMenu(props) {
    const [menuOpen, setMenuOpen] = useState(props.isOpen)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
        props.open()
    }

    return (
        <>
            {menuOpen && (
                <div className="burger-overlay" onClick={handleClick}></div>
            )}
            <div className="burger-container" onClick={handleClick}>
                <div className={`burger ${menuOpen && 'burger-open'}`}></div>
                <div className={`burger ${menuOpen && 'burger-open'}`}></div>
                <div className={`burger ${menuOpen && 'burger-open'}`}></div>
            </div>
        </>
    )
}
