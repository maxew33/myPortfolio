import { v4 as uuidv4 } from 'uuid'

import html5 from '../assets/html-5.svg'
import css3 from '../assets/css3.svg'
import sass from '../assets/Sass.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import github from '../assets/github.svg'
import firebase from '../assets/firebase.svg'
import email from '../assets/mail.svg'
import anglais from '../assets/US-UK_Flag.svg'
import francais from '../assets/abc.svg'

const dataSkills = [
    {
        id: uuidv4(),
        name: 'HTML 5',
        src: html5
    },
    {
        id: uuidv4(),
        name: 'CSS 3',
        src: css3
    },
    {
        id: uuidv4(),
        name: 'SASS',
        src: sass
    },
    {
        id: uuidv4(),
        name: 'javascript',
        src: javascript
    },
    {
        id: uuidv4(),
        name: 'REACT',
        src: react
    },
    {
        id: uuidv4(),
        name: 'github',
        src: github
    },
    {
        id: uuidv4(),
        name: 'firebase',
        src: firebase
    },
    {
        id: uuidv4(),
        name: 'emailing',
        src: email
    },
    {
        id: uuidv4(),
        name: 'anglais: professionnel',
        src: anglais
    },
    {
        id: uuidv4(),
        name: 'maîtrise de l\'orthographe',
        src: francais
    }
]

export default dataSkills