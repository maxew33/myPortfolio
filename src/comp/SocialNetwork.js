import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SocialNetwork() {
    return (
        <div className="social-network">
            <a href="https://github.com/maxew33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link to my Github page">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/maxime-malfilatre-1a3b97204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link to my Github page">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/m4xew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link to my twitter page">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://codepen.io/maxew33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link to my codepen page">
                <FontAwesomeIcon icon={faCodepen} />
            </a>
        </div>
    )
}
