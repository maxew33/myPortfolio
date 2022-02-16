import React, { useState, useContext } from 'react';
import { Context } from '../context/languageContext.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPlay, faStepForward, faStepBackward, faStop, faPause, faVolumeMute, faVolumeUp, faVolumeDown, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import atWork from '../assets/avataratwork.webp'

import dataSkills from '../datas/dataSkills.js'

import '../style/slideSkills.css'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

export default function SlideSkills() {

    const [videoModalDisplayed, setVideoModalDisplayed] = useState(false)

    const [remindCta, setRemindCta] = useState(true)

    const { language } = useContext(Context)

    const handleLaptopClick = () => {
        console.log('clic')
        if (!videoModalDisplayed) {
            // Array.from(document.querySelectorAll('.skill-img')).forEach(skill => skill.classList.remove('hidden-img'))
            // Array.from(document.querySelectorAll('.skill-name')).forEach(skill => skill.classList.remove('hidden-name'))
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
                    <>
                        <p>
                            “ Formé aux principaux langages de programmation , j’aime créer des <span className="custom-text-color">interfaces efficaces</span>, <span className="custom-text-color">originales</span> et <span className="custom-text-color">interactives</span>. ”

                            {/* Formé aux principaux langages de programmation , j’aime créer des interfaces efficaces, originales et interactives. */}
                        </p>
                        {/* <p>Pour en savoir plus, je vous invite {!skillsDisplayed && 'à cliquer sur mon ordinateur puis'} à consulter mon CV :
                            &nbsp;
                            <a href={process.env.PUBLIC_URL + ' /Maxime_Malfilatre_CV.pdf'}
                                className="resume-download"
                                target="_blank"
                                aria-label="téléchargement du CV de Maxime Malfilâtre">
                                <FontAwesomeIcon icon={faFileAlt} />
                            </a>
                        </p> */}
                    </>
                    : <>

                        <p>
                            “ Trained in the main programming languages, I like to create <span className="custom-text-color">effective</span>, <span className="custom-text-color">original</span> and <span className="custom-text-color">interactive interfaces</span>. ”

                            {/* Formé aux principaux langages de programmation , j’aime créer des interfaces efficaces, originales et interactives. */}
                        </p>


                        {/* <p>
                            Trained in the main programming languages, I like to create effective, original and interactive interfaces.
                        </p>
                        <p>To find out more, I invite you to  {!skillsDisplayed && 'click on my computer and then'} consult my resume :
                            &nbsp;
                            <a href={process.env.PUBLIC_URL + ' /Maxime_Malfilatre_Resume.pdf'}
                                className="resume-download"
                                target="_blank"
                                aria-label="Maxime Malfilatre's resume download">
                                <FontAwesomeIcon icon={faFileAlt} />
                            </a>
                        </p> */}
                    </>
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
                        <a href={process.env.PUBLIC_URL + ' /Maxime_Malfilatre_CV.pdf'}
                            className="resume-download"
                            target="_blank"
                            aria-label="téléchargement du CV de Maxime Malfilâtre">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </a>
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
                <div className="overlay"  onClick={exitModal}>
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
