import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Draggable from 'react-draggable'

import { faRedo, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import body from '../assets/body.png'
import headCartoon from '../assets/head-cartoon.png'
import headReal from '../assets/head-real.webp'


import '../style/slideHome.css'

export default function SlideHome() {

    const [myStatusIdx, setMyStatusIdx] = useState({
        index: 0,
        preventSpam: false
    })

    const [reloadButtonRotation, setReloadButtonRotation] = useState(360)

    const myStatus = [
        'vous dit bonjour!',
        'a hâte de vous rencontrer. ',
        'a codé ce site avec rigueur...',
        'et avec React.',
        'sait se former tout seul.',
        'est aussi un mari...',
        'et un papa.',
        'est un grand gaillard de 2m ...',
        'qui aime le rugby ...',
        'jouer à Hearthstone ...',
        'aux jeux de société ...',
        'mais n\'a pas de chance aux dés.',
        'fait des blagues à papa  ...',
        'et n\'a plus rien à dire.'
    ]

    const handleReloadStatus = () => {

        console.log('clic')

        if (!myStatusIdx.preventSpam) {
            const statusHeight = document.querySelector('.status').getBoundingClientRect().height
            document.querySelector('.status').style.height = 0

            setReloadButtonRotation(reloadButtonRotation + 360)

            document.querySelector('.reload-status').style.transform = 'rotate(' + reloadButtonRotation + 'deg)'

            setMyStatusIdx({ index: myStatusIdx.index, preventSpam: true })

            setTimeout(() => {
                let myNewStatusIdx = myStatusIdx.index
                myNewStatusIdx++
                myNewStatusIdx >= myStatus.length && (myNewStatusIdx = 0)
                setMyStatusIdx({ index: myNewStatusIdx, preventSpam: true })
                document.querySelector('.status').style.height = statusHeight + 'px'
                console.log(document.querySelector('.status').style.height = statusHeight + 'px')

                setTimeout(() => {
                    setMyStatusIdx({ index: myNewStatusIdx, preventSpam: false })
                }, 250)
            }, 250)
        }
    }

    const handlePullMeDrag = (e, ui) => {
        const heightRef = document.querySelector('.pull-me-container').getBoundingClientRect().height - document.querySelector('.pull-me').getBoundingClientRect().height

        let clipValue = (21 * ui.y / heightRef)
        clipValue > 20 && (clipValue = 20)

        console.log(clipValue)

        document.querySelector('.my-avatar').style.setProperty('--avatar-clip-value', clipValue + '%')
    }

    return (
        <div className='slide-wrapper home-wrapper'>

            {/* My presentation : firstname / lastname / job */}
            <div className='introducing-myself'>
                <h1 className="my-name">
                    <span className="my-firstname">
                        <span className="custom-text-color">max</span>ime
                    </span>
                    <span className="my-lastname">
                        malfilâtre
                    </span>
                </h1>
                {/* <div className="my-name-line"></div> */}
                <h2 className='my-role'><span className="custom-text-color">dév</span>eloppeur <span className="custom-text-color">front</span>-end</h2>
            </div>

            {/* My current status + cta */}
            <div className="status-container">
                <div className="status">
                    {myStatus[myStatusIdx.index]}
                </div>

                <button
                    className="reload-status"
                    onClick={handleReloadStatus}
                    aria-label="reload status">
                    <FontAwesomeIcon icon={faRedo} />
                </button>
            </div>

            {/* Social network links */}
            <div className="social-network">
                <a href="https://github.com/maxew33"
                    target="_blank"
                    rel="noopener"
                    aria-label="link to my Github page">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/maxime-malfilatre-1a3b97204/"
                    target="_blank"
                    rel="noopener"
                    aria-label="link to my Github page">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/m4xew"
                    target="_blank"
                    rel="noopener"
                    aria-label="link to my twitter page">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://codepen.io/maxew33"
                    target="_blank"
                    rel="noopener"
                    aria-label="link to my codepen page">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
            </div>

            {/* Avatar */}
            <div className="my-avatar">

                <img
                    className="avatar-body"
                    src={body}
                    alt="corps de l'avatar" />
                <img
                    className="avatar-head avatar-head1"
                    src={headCartoon}
                    alt="tête de l'avatar façon cartoon" />
                <img
                    className="avatar-head avatar-head2"
                    src={headReal}
                    alt="mon vrai visage" />

                <div className="pull-me-container">
                    <Draggable
                        axis="y"
                        bounds="parent"
                        onDrag={handlePullMeDrag}
                    >
                        <div className="pull-me">
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>

                    </Draggable>
                </div>
            </div>

        </div>
    )
}
