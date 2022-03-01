import React, { useState, useContext } from 'react';
import { Context } from '../context/languageContext.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import atWork from '../assets/avataratwork.webp'

import dataSkills from '../datas/dataSkills.js'

import '../style/slideSkills.css'

export default function SlideSkills() {

    const [videoModalDisplayed, setVideoModalDisplayed] = useState(false)

    const [remindCta, setRemindCta] = useState(true)

    const { language } = useContext(Context)

    const handleLaptopClick = () => {
        if (!videoModalDisplayed) {
            setVideoModalDisplayed(true)
            setRemindCta(false)
            document.querySelector('.video-modal').style.display = 'block'
            document.querySelector('.my-video-modal').play()
            document.querySelector('.my-video-modal').volume = 0
        }
    }

    const exitModal = () => {
        setVideoModalDisplayed(false)
        document.querySelector('.video-modal').style.display = 'none'
        document.querySelector('.my-video-modal').pause()
    }

    return (
        <div className="skills-wrapper">

            <div className="section-title">
                {language === 'FR' ? 'Compétences' : 'Skills'}
            </div>

            <div className="intro-of-myself">
                {language === 'FR' ?
                    <p>
                        “ Formé aux principaux langages de programmation , j’aime créer des <span className="custom-text-color">interfaces efficaces</span>, <span className="custom-text-color">originales</span> et <span className="custom-text-color">interactives</span>. ”
                    </p>
                    :
                    <p>
                        “ Trained in the main programming languages, I like to create <span className="custom-text-color">effective</span>, <span className="custom-text-color">original</span> and <span className="custom-text-color">interactive interfaces</span>. ”
                    </p>
                }
            </div>

            <div className="skills-container">
                {dataSkills.map((item) => {
                    return (
                        <div className='my-skill' key={item.id}>
                            <img
                                className='skill-img'
                                src={item.src}
                                alt={language === 'FR' ? item.nameFR : item.nameEN} />
                            <div className='skill-name'>
                                {language === 'FR' ? item.nameFR : item.nameEN}
                            </div>
                        </div>
                    )
                })}

                <div className='my-skill my-resume'>
                    <div className='skill-name'>
                        {language === 'FR' ? 'Télécharger le CV' : 'Resume download'}
                    </div>
                    <div className="skill-img">
                        {language === 'FR' ?
                            <a href={process.env.PUBLIC_URL + ' /Maxime_Malfilatre_CV.pdf'}
                                className="resume-download"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="téléchargement du CV de Maxime Malfilâtre">
                                <FontAwesomeIcon icon={faFileAlt} />
                            </a>
                            :
                            <a href={process.env.PUBLIC_URL + ' /Maxime_Malfilatre_Resume.pdf'}
                                className="resume-download"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="download Maxime Malfilâtre resume">
                                <FontAwesomeIcon icon={faFileAlt} />
                            </a>
                        }


                    </div>
                </div>

            </div>

            <img
                className="avatar-at-work"
                src={atWork}
                alt="avatar à son poste de travail" />

            <div className="hit-zone"
                onClick={handleLaptopClick}>

                {remindCta &&
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

            <div className="video-modal">
                <div className="overlay" onClick={exitModal}>
                </div>
                <div className="video-modal-player">
                    <video
                        className="my-video-modal"
                        loop={true}
                        autoPlay={false}>
                        <source
                            src={process.env.PUBLIC_URL + ' /video/ben-video.mp4'}
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className="exit-modal" onClick={exitModal}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </div>
                </div>
            </div>

        </div>
    )
}
