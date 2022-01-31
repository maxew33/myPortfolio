import React, { useState, useEffect } from 'react'
import dataVideos from './dataVideos.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faStepForward, faStepBackward, faStop, faPause, faVolumeMute, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../style/slideWork.css'

export default function SlideWork(props) {

    const [channel, setChannel] = useState(0)
    const [videoIsPlaying, setVideoIsPlaying] = useState(false)
    const [videoOnPause, setVideoOnPause] = useState(false)
    const [volumeLvl, setVolumeLvl] = useState(0)

    // useEffect watch the face displayed, when this face is displayed, play the video, stop it when it is not
    useEffect(() => {

        document.querySelector('.my-video').volume = volumeLvl

        if (props.slide === 1) {
            videoOnPause ? document.querySelector('.my-video').play() : playVideo()
            setVideoOnPause(false)
            setVideoIsPlaying(true)
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
            console.log('volume change')
        }
    }, [volumeLvl])

    useEffect(() => {
        console.log('montage du work slide')

    }, [])


    const handleChooseVideo = (id) => {
        const newChannel = id
        setChannel(newChannel)
    }

    const handlePlay = () => {
        console.log('videoOnPause', videoOnPause)
        videoIsPlaying ? document.querySelector('.my-video').pause() : document.querySelector('.my-video').play()
        videoIsPlaying && setVideoOnPause(true)
        setVideoIsPlaying(!videoIsPlaying)
    }

    const handleNav = (dir) => {
        console.log('nav', dir)
        console.log('ended')
        let newChannel = channel
        newChannel += dir
        newChannel === dataVideos.length && (newChannel = 0)
        newChannel < 0 && (newChannel = dataVideos.length - 1)
        console.log(newChannel)
        setChannel(newChannel)
        console.log('channel: ', channel)
    }

    const handleStop = () => {
        document.querySelector('.my-video').pause();
        document.querySelector('.my-video').currentTime = 0;
        setVideoIsPlaying(false)
    }

    const handleVolume = (volume) => {
        console.log('volume', volume)
        console.log(volumeLvl)
        let newVolume = volumeLvl
        volume === 0 ? newVolume = 0 : newVolume += volume
        newVolume < 0 && (newVolume = 0)
        newVolume > 1 && (newVolume = 1)
        setVolumeLvl(newVolume)
        document.querySelector('.my-video').volume = newVolume
    }

    const handleEnd = () => {
        console.log('ended')
        let newChannel = channel
        newChannel++
        newChannel === dataVideos.length && (newChannel = 0)
        console.log(newChannel)
        setChannel(newChannel)
        console.log('channel: ', channel)
    }

    const playVideo = () => {
        const myVideo = document.querySelector('.my-video')
        console.log('play video channel: ', channel)
        myVideo.src = dataVideos[channel].src
        myVideo.play().then(() => {
            setVideoIsPlaying(true)
            console.log("Yay ! La vidéo est lancée !");
        }).catch((error) => {
            console.error('pb avec la video:', error)
        })
        myVideo.volume = volumeLvl
    }

    return (
        <div className='slide-wrapper'>
            <div className="work-wrapper">
                <div className="video-player-container">
                    <video
                        className="my-video"
                        loop={false}
                        onEnded={handleEnd}>
                        <source
                            src={dataVideos[channel].src}
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support embedded videos.
                    </video>

                </div>

                <div className="video-controls">
                    <button className="video-play"
                        onClick={handlePlay}>
                        {videoIsPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                    </button>
                    <button className="video-prev"
                        onClick={() => handleNav(-1)}>
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button className="video-stop"
                        onClick={handleStop}>
                        <FontAwesomeIcon icon={faStop} />
                    </button>
                    <button className="video-next"
                        onClick={() => handleNav(1)}>
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                    <button className="video-volume"
                        onClick={() => handleVolume(0)}>
                        <FontAwesomeIcon icon={faVolumeMute} />
                    </button>
                    <button className="video-volume"
                        onClick={() => handleVolume(-.1)}>
                        <FontAwesomeIcon icon={faVolumeDown} />
                    </button>
                    <button className="video-volume"
                        onClick={() => handleVolume(.1)}>
                        <FontAwesomeIcon icon={faVolumeUp} />
                    </button>
                </div>

                <div className="video-thumb-container">
                    {/* Ajouter ici un btn permettant de remonter et sur les items un dan s le useEffect, une verif de la place de l'item dans le container, si l'item n'est pas visible, faire une translation sur y du container */}
                    {dataVideos.map((item, index) => {
                        return (
                            <div className="video-thumb" key={index}>
                                <div className="video-thumb-rank">
                                    {channel === index ? <FontAwesomeIcon icon={faPlay} /> : index + 1}
                                    <img className="video-thumb-img"
                                        src={item.thumb}
                                        onClick={() => handleChooseVideo(index)} />
                                </div>

                                <div className="video-thumb-name">
                                    {item.name}
                                </div>

                            </div>
                        )
                    })}
                </div>

                <div className="video-infos-container">

                    <div className="video-name">
                        {channel + 1} / {dataVideos.length} - {dataVideos[channel].name}
                    </div>

                    <div className="video-prez">
                        {dataVideos[channel].prez}
                    </div>

                    <div className="video-descr">
                        {dataVideos[channel].txt}
                    </div>

                    <div className="video-links">

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
            </div>

        </div>
    )
}
