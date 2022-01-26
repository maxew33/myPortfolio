import { React, useRef } from 'react'
import emailjs from 'emailjs-com'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import stamp from '../assets/stamp.png'

import '../style/slideContact.css'

export default function SlideContact() {

    const form = useRef()

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_EMAILKEY_SERVICE_ID, process.env.REACT_APP_EMAILKEY_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILKEY_USER_ID)
            .then(result => {
                console.log(result.text)
                const postcard = document.querySelector('.postcard-border'),
                    animationContainer = document.querySelector('.animation-container')

                animationContainer.style.display = 'block'

                setTimeout(function () {
                    postcard.style.opacity = 0
                }, 600)

                setTimeout(function () {
                    let words = "message envoyé".split('')
                    let delay = 0
                    for (let i = 0; i < words.length; i++) {
                        setTimeout(() => {
                            document.querySelector('.message-container').innerHTML += words[i]
                            if (i === words.length - 1) {
                                setTimeout(() => {
                                    document.querySelector('.message-container').innerHTML = ''
                                    document.getElementById('message-input').value = ''
                                    document.getElementById('name-input').value = ''
                                    document.getElementById('email-input').value = ''
                                    postcard.style.opacity = 1
                                    animationContainer.style.display = 'none'

                                }, 2000)
                            }
                        }, 150 * delay)
                        delay++
                    }

                }, 1750);
            }, error => {
                console.log(error.text)
                alert('le message n\'a pas pu être envoyé.')
            })
    }


    return (
        <div className='slide-wrapper'>

            <div className="contact-wrapper">

                <div className="message-container"></div>

                <div className="postcard-container">
                    <div className="postcard">
                        <div className="postcard-left">
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="postcard-left-form">

                                <div className="postcard-left-salutation">Cher Max,</div>

                                <div className="postcard-left-input postcard-left-message">
                                    <textarea id="message-input" name="message" required defaultValue={""} />
                                    <label htmlFor="message-input">Message</label>
                                </div>

                                <div className="postcard-left-input postcard-left-nom">
                                    <input id="name-input" type="text" name="from_name" required />
                                    <label htmlFor="name-input">Nom</label>
                                </div>

                                <div className="postcard-left-input postcard-left-mail">
                                    <input id="email-input" type="email" name="user_email" required />
                                    <label htmlFor="email-input" >Email</label>
                                </div>

                                <button type="submit" className="postcard-left-submit-btn" >
                                    Envoyer <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </form>
                        </div>
                        <div className="postcard-right">
                            <div className="postcard-right-stamp">
                                <img
                                    className="gladys"
                                    src={stamp}
                                    alt='stamp' />
                            </div>
                            <div className="postcard-right-exp">
                                <div className="postcard-right-nom">Maxime Malfilâtre</div>
                                <div className="postcard-right-adresse">Bordeaux</div>
                                <div className="postcard-right-mail">
                                    malfilatre.dev@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animation-container">
                    {/* ------------- ENVELOPPE ------------- */}
                    <div className="enveloppe-container">
                        <div className="enveloppe">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
