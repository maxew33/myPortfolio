import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

import atWork from '../assets/avataratwork.png'


import '../style/slideSkills.css'

export default function SlideSkills() {

    const handleLaptopClick = () => {
        console.log('clic')
    }


    return (
        <div className='slide-wrapper'>
            <div className="skills-wrapper">

                <div className="intro-of-myself">
                    <p>
                        Formé aux principaux langages de programmation , j’aime créer des interfaces efficaces, originales et interactives.
                    </p>
                    <p>Pour en savoir plus, je vous invite à cliquer sur mon ordinateur puis à consulter mon CV :
                        &nbsp;
                        <a href={process.env.PUBLIC_URL + ' /cv-malfilatre-maxime.pdf'}
                            className="resume-download"
                            aria-label="Resume download">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </a>
                    </p>
                </div>

                <img
                    className="avatar-at-work"
                    src={atWork}
                    alt="avatar à son poste de travail" />

                    <div className="hit-zone"
                    onClick={handleLaptopClick}>

                    </div>

            </div>
        </div>
    )
}
