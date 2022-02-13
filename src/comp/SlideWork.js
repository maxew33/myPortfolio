import React, { useState, useEffect, useContext } from 'react'

import { Context } from '../context/languageContext.js'
import dataVideos from '../datas/dataVideos.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faStepForward, faStepBackward, faStop, faPause, faVolumeMute, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../style/slideWork.css'

export default function SlideWork(props) {

    const [channel, setChannel] = useState(0)
    const [videoIsPlaying, setVideoIsPlaying] = useState(false)
    const [videoOnPause, setVideoOnPause] = useState(false)
    const [volumeLvl, setVolumeLvl] = useState(0)
    const [videoIsLoaded, setVideoIsLoaded] = useState(false)

    const { language } = useContext(Context)

    // useEffect watch the face displayed, when this face is displayed, play the video, stop it when it is not
    useEffect(() => {

        document.querySelector('.my-video').volume = volumeLvl

        if (props.slide === 1) {
            videoOnPause ? document.querySelector('.my-video').play() : playVideo()
            setVideoOnPause(false)
            setVideoIsPlaying(true)
            !videoIsLoaded && document.querySelector('.video-loader-container').classList.add('loader-apparition')
            console.log(123)
        }
        else {
            document.querySelector('.my-video').pause()
            setVideoIsPlaying(false)
            setVideoOnPause(true)
        }
    },
        [props.slide, channel])

    useEffect(() => {
        if (props.slide === 1) {
            document.querySelector('.my-video').volume = volumeLvl
        }
    }, [volumeLvl])

    const handleChooseVideo = (id) => {
        const newChannel = id
        setChannel(newChannel)
        setVideoIsLoaded(false)
    }

    const handlePlay = () => {
        videoIsPlaying ? document.querySelector('.my-video').pause() : document.querySelector('.my-video').play()
        videoIsPlaying && setVideoOnPause(true)
        setVideoIsPlaying(!videoIsPlaying)
    }

    const handleNav = (dir) => {
        let newChannel = channel
        newChannel += dir
        newChannel === dataVideos.length && (newChannel = 0)
        newChannel < 0 && (newChannel = dataVideos.length - 1)
        setChannel(newChannel)
        setVideoIsLoaded(false)
    }

    const handleStop = () => {
        document.querySelector('.my-video').pause();
        document.querySelector('.my-video').currentTime = 0;
        setVideoIsPlaying(false)
    }

    const handleVolume = (volume) => {
        let newVolume = volumeLvl
        volume === 0 ? newVolume = 0 : newVolume += volume
        newVolume < 0 && (newVolume = 0)
        newVolume > 1 && (newVolume = 1)
        setVolumeLvl(newVolume)
        document.querySelector('.my-video').volume = newVolume
    }

    const handleEnd = () => {
        setTimeout(() => {
            let newChannel = channel
            newChannel++
            newChannel === dataVideos.length && (newChannel = 0)
            setChannel(newChannel)
            setVideoIsLoaded(false)
        }, 500)
    }

    const playVideo = () => {
        const myVideo = document.querySelector('.my-video')

        myVideo.src = dataVideos[channel].src
        myVideo.play().then(() => {
            setVideoIsPlaying(true);
        }).catch((error) => {
            return (console.error('pb avec la video:', error))
        })

        myVideo.volume = volumeLvl
    }

    const handleLoad = () => {
        console.log('loaded')
        setVideoIsLoaded(true)
        document.querySelector('.video-loader-container').classList.remove('loader-apparition')
    }

    return (
        <div className="work-wrapper">

            <div className="section-title">
                Portfolio
            </div>


            <div className="video-player-container">
                <div className="video-loader-container">
                    <div className="link">
                        <span className="brace">
                            &#123;
                        </span>
                        <span className="my-text">
                            <span className="my-text-content my-text-1">
                                m
                            </span>
                            <span className="my-text-content my-text-2">
                                loading&nbsp;...
                            </span>
                            <span className="my-text-content my-text-3">
                                please&nbsp;wait
                            </span>
                        </span>
                        <span className="brace">
                            &#125;
                        </span>
                    </div>
                </div>
                <video
                    className="my-video"
                    loop={false}
                    onEnded={handleEnd}
                    onLoadedData={handleLoad}>
                    <source
                        src={dataVideos[channel].src}
                        type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                </video>

            </div>

            <div className="video-controls">
                <button className="video-play"
                    aria-label={language === 'FR' ? 'lecture' : 'play'}
                    onClick={handlePlay}>
                    {videoIsPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
                <button className="video-prev"
                    aria-label={language === 'FR' ? 'précédente' : 'previous'}
                    onClick={() => handleNav(-1)}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button className="video-stop"
                    aria-label={language === 'FR' ? 'stop' : 'stop'}
                    onClick={handleStop}>
                    <FontAwesomeIcon icon={faStop} />
                </button>
                <button className="video-next"
                    aria-label={language === 'FR' ? 'suivante' : 'next'}
                    onClick={() => handleNav(1)}>
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
                <button className="video-volume"
                    aria-label={language === 'FR' ? 'muet' : 'mute'}
                    onClick={() => handleVolume(0)}>
                    <FontAwesomeIcon icon={faVolumeMute} />
                </button>
                <button className="video-volume"
                    aria-label={language === 'FR' ? 'baisser le volume' : 'volume down'}
                    onClick={() => handleVolume(-.1)}>
                    <FontAwesomeIcon icon={faVolumeDown} />
                </button>
                <button className="video-volume"
                    aria-label={language === 'FR' ? 'augmenter le volume' : 'volume up'}
                    onClick={() => handleVolume(.1)}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                </button>
            </div>

            <div className="video-thumb-container">
                {/* Ajouter ici un btn permettant de remonter et sur les items un dan s le useEffect, une verif de la place de l'item dans le container, si l'item n'est pas visible, faire une translation sur y du container */}
                {dataVideos.map((item, index) => {
                    return (
                        <div className={channel === index ? "video-thumb video-thumb-played" : "video-thumb"} data-id="thumb" key={index}>
                            <img className="video-thumb-img"
                                src={item.thumb}
                                alt={language === 'FR' ? item.nameFR : item.nameEN}
                                onClick={() => handleChooseVideo(index)} />
                            <div className="video-thumb-rank">
                                {channel === index ? <FontAwesomeIcon icon={faPlay} /> : index + 1}
                            </div>
                            <div className="video-thumb-name">
                                {language === 'FR' ? item.nameFR : item.nameEN}
                            </div>

                        </div>
                    )
                })}
            </div>

            <div className="video-infos-container">

                <div className="video-name">
                    {channel < 9 && 0}{channel + 1} / {dataVideos.length} - {language === 'FR' ? dataVideos[channel].nameFR : dataVideos[channel].nameEN}
                    <div className="video-links">
                        &nbsp;
                        {dataVideos[channel].youtubeLink &&
                            <a href={dataVideos[channel].youtubeLink}
                                target="_blank"
                                rel="noopener"
                                aria-label="link to the youtube video">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        }
                        {dataVideos[channel].gitHubLink &&
                            <a href={dataVideos[channel].gitHubLink}
                                target="_blank"
                                rel="noopener"
                                aria-label="link to the github page">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        }
                        {dataVideos[channel].codePenLink &&
                            <a href={dataVideos[channel].codePenLink}
                                target="_blank"
                                rel="noopener"
                                aria-label="link to the codepen page">
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        }
                    </div>
                </div>

                {/* <div className="video-prez">
                    {language === 'FR' ? dataVideos[channel].prezFR : dataVideos[channel].prezEN}
                </div> */}

                <div className="video-descr">
                    {language === 'FR' ? dataVideos[channel].txtFR : dataVideos[channel].txtEN}
                </div>


            </div>
        </div>
    )
}
