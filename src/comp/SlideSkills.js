import React, { useState, useContext } from 'react';
import { Context } from '../context/languageContext.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

import atWork from '../assets/avataratwork.png'

import dataSkills from '../datas/dataSkills.js'

import '../style/slideSkills.css'

export default function SlideSkills() {

    const [skillsDisplayed, setSkillsDisplayed] = useState(false)

    const { language } = useContext(Context)

    const handleLaptopClick = () => {
        console.log('clic')
        if (!skillsDisplayed) {
            Array.from(document.querySelectorAll('.skill-img')).forEach(skill => skill.classList.remove('hidden-img'))
            Array.from(document.querySelectorAll('.skill-name')).forEach(skill => skill.classList.remove('hidden-name'))
            setSkillsDisplayed(true)
        }
    }

    return (
            <section className="slide-wrapper skills-wrapper">

                <div className="intro-of-myself">
                    {language === 'FR' ?
                        <>
                            <p>
                                Formé aux principaux langages de programmation , j’aime créer des interfaces efficaces, originales et interactives.
                            </p>
                            <p>Pour en savoir plus, je vous invite {!skillsDisplayed && 'à cliquer sur mon ordinateur puis'} à consulter mon CV :
                                &nbsp;
                                <a href={process.env.PUBLIC_URL + ' /cv-malfilatre-maxime.pdf'}
                                    className="resume-download"
                                    target="_blank"
                                    aria-label="Resume download">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </a>
                            </p>
                        </>
                        : <>
                            <p>
                            Trained in the main programming languages, I like to create effective, original and interactive interfaces.
                            </p>
                            <p>To find out more, I invite you to  {!skillsDisplayed && 'click on my computer and then'} consult my resume :
                                &nbsp;
                                <a href={process.env.PUBLIC_URL + ' /cv-malfilatre-maxime.pdf'}
                                    className="resume-download"
                                    target="_blank"
                                    aria-label="Resume download">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </a>
                            </p>
                        </>
                    }
                </div>

                <img
                    className="avatar-at-work"
                    src={atWork}
                    alt="avatar à son poste de travail" />

                <div className="hit-zone"
                    onClick={handleLaptopClick}>

                    {!skillsDisplayed &&
                        <div className="remind-cta">
                            <div className="circle">
                            </div>
                            <div className="circle">
                            </div>
                            <div className="circle">
                            </div>
                        </div>
                    }

                </div>

                <div className="skills-container">
                    {dataSkills.map((item, index) => {
                        return (
                            <div className={'my-skill my-skill' + (index + 1)} key={item.id}>
                                <img
                                    className='skill-img hidden-img'
                                    src={item.src}
                                    alt={language === 'FR' ? item.nameFR : item.nameEN} />
                                <div className='skill-name hidden-name'>
                                    {language === 'FR' ? item.nameFR : item.nameEN}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>
    )
}
