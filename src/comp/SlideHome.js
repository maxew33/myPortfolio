import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/languageContext.js'

import SocialNetwork from './SocialNetwork.js'
import dataObjects from '../datas/dataObjects.js'
import dataStatus from '../datas/dataStatus.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Draggable from 'react-draggable'

import { faRedo, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import body from '../assets/body.webp'
import headCartoon from '../assets/head-cartoon.webp'
import headReal from '../assets/head-real.webp'

import '../style/slideHome.css'

export default function SlideHome() {

    const [myStatusIdx, setMyStatusIdx] = useState({
        index: 0,
        preventSpam: false
    })
    const [reloadButtonRotation, setReloadButtonRotation] = useState(360)
    const [remindCta, setRemindCta] = useState(true)
    // const [drag, setDrag] = useState(false)
    const [chestObjects, setChestObjects] = useState(dataObjects)

    const { language } = useContext(Context)

    const handleStart = e => {
        // setDrag(true)

        /* when I take an accessory, set its z index to 20 */

        const myId = parseInt(e.target.dataset.id)

        const newArr = [...chestObjects]

        for (let i = 0; i < newArr.length; i++) {
            i !== myId ? (newArr[i].zIndex > e.target.style.zIndex && newArr[i].zIndex--) : newArr[i].zIndex = 20
        }
        setChestObjects(newArr)
    }

    const handleStop = () => {
        // setTimeout(() => setDrag(false), 50)
    }

    useEffect(() => {

        const chest = document.querySelector('.chest-container'),
            chestTop = document.querySelector('.chest-top-front'),
            // chestBottom = document.querySelector('.chest-bottom'),
            accessoryContainer = [...document.querySelectorAll('.accessory-container')],
            accessory = [...document.querySelectorAll('.avatar-accessory')]

        let chestOpen = false
        let accessoryThrown = 0

        //chest opening / closing and stuff thrown

        accessoryContainer.forEach(container => container.classList.add('accessory-hidden'))

        chest.addEventListener('click', () => {

            setRemindCta(false)

            if (!chestOpen && accessoryThrown < accessory.length) {
                if (accessoryThrown < (accessory.length - 1)) {
                    chestTop.classList.toggle('open')
                }
                else {
                    chestTop.classList.toggle('open')
                    setTimeout(() => {
                        chestTop.classList.toggle('open')
                        chest.classList.add('chest-closed')
                    }, 750)
                }
                accessory[accessoryThrown].classList.add('accessory-ejection')
                accessoryContainer[accessoryThrown].classList.remove('accessory-hidden')

                accessoryThrown++
                chestOpen = true

                accessoryThrown < accessory.length && (setTimeout(() => {
                    chestTop.classList.toggle('open')
                    chestOpen = false
                }, 750))
            }

        })

    }, [])


    let myStatus = language === 'FR' ? dataStatus.FR : dataStatus.EN

    const handleReloadStatus = () => {

        if (!myStatusIdx.preventSpam) {
            const statusHeight = document.querySelector('.status').getBoundingClientRect().height
            document.querySelector('.status').style.height = 0

            console.log(statusHeight)

            setReloadButtonRotation(reloadButtonRotation + 360)

            document.querySelector('.reload-status').style.transform = 'rotate(' + reloadButtonRotation + 'deg)'

            setMyStatusIdx({ index: myStatusIdx.index, preventSpam: true })

            setTimeout(() => {
                let myNewStatusIdx = myStatusIdx.index
                myNewStatusIdx++
                myNewStatusIdx >= myStatus.length && (myNewStatusIdx = 0)
                setMyStatusIdx({ index: myNewStatusIdx, preventSpam: true })
                document.querySelector('.status').style.height = statusHeight + 'px'

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

        document.querySelector('.my-avatar').style.setProperty('--avatar-clip-value', clipValue + '%')
    }

    return (
        <div className='home-wrapper'>

            {/* My presentation : firstname / lastname / job */}
            <div className='introducing-myself'>
                <h1 className="my-name">
                    Maxime Malfilâtre
                </h1>

                <h2 className='my-role'>{language === 'FR' ? 'Développeur front-end' : 'Front-end developer'}</h2>
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
            <SocialNetwork />

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

            {/* chest and draggables objects */}

            <div className="chest-container">
                <div className="chest-top">
                    <div className="chest-top-front">
                    </div>
                </div>
                <div className="chest-bottom">
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
            </div>

            {dataObjects.map((item, index) => {
                return (
                    <Draggable
                        bounds="parent"
                        key={dataObjects[index].id}
                        onStart={handleStart}
                        onStop={handleStop}>
                        <div className={'accessory-container accessory-container' + (index + 1)}
                            data-id={index}
                            style={{
                                width: dataObjects[index].width,
                                zIndex: dataObjects[index].zIndex
                            }}>
                            <img
                                className="avatar-accessory"
                                src={dataObjects[index].src}
                                alt={dataObjects[index].alt} />

                        </div>
                    </Draggable>
                )
            })}

        </div>
    )
}
