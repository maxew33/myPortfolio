import React, { useState, useContext } from 'react'
import { Context } from '../context/languageContext'

import english from '../assets/donut.svg'
import french from '../assets/croissant.svg'


export default function ToggleLanguage() {

  const [toggle, setToggle] = useState(true)

  const { language, toggleLanguage } = useContext(Context)

  // language toggle
  /* const handleClickToggle = () => {
     if (toggle) {
 
         let newLanguage = language
 
         console.log(language)
 
         newLanguage === 'FR' ? toggleLanguage('EN') : toggleLanguage('FR')
         
       document.querySelector('.language-toggle-selector').classList.toggle('english-selected')
 
       setToggle(false)
 
       setTimeout(() => {
         setToggle(true)
       }, 350);
     }
   }*/
  const handleClickToggle = () => {
    if (toggle) {

      let newLanguage = language

      newLanguage === 'FR' ? toggleLanguage('EN') : toggleLanguage('FR')

      document.querySelector('.language-toggle-selector').classList.toggle('english-selected')

      setToggle(false)

      setTimeout(() => {
        setToggle(true)
      }, 350);
    }
  }

  const handleClickToggleLang = (lang) => {
    if (toggle) {

      if (language === lang) {
        return
      }
      else {
        toggleLanguage(lang)
      }

      document.querySelector('.language-toggle-selector').classList.toggle('english-selected')

      setToggle(false)

      setTimeout(() => {
        setToggle(true)
      }, 350);
    }
  }

  return (
    <div className="language-toggle">
      FR&nbsp;
      <img
        className='language-toggle-img'
        alt={language === 'FR' ? 'français' : 'french'}
        onClick={() => handleClickToggleLang('FR')}
        src={french} />
      <div className="language-toggle-selector-container"
        onClick={handleClickToggle}>
        <div className="language-toggle-selector"></div>
      </div>
      <img
        className='language-toggle-img'
        alt={language === 'FR' ? 'anglais' : 'english'}
        onClick={() => handleClickToggleLang('EN')}
        src={english} />
      &nbsp;EN
    </div>
  )
}
