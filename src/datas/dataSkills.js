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
        nameFR: 'HTML 5',
        nameEN: 'HTML 5',
        src: html5
    },
    {
        id: uuidv4(),
        nameFR: 'CSS 3',
        nameEN: 'CSS 3',
        src: css3
    },
    {
        id: uuidv4(),
        nameFR: 'SASS',
        nameEN: 'SASS',
        src: sass
    },
    {
        id: uuidv4(),
        nameFR: 'javascript',
        nameEN: 'javascript',
        src: javascript
    },
    {
        id: uuidv4(),
        nameFR: 'REACT',
        nameEN: 'REACT',
        src: react
    }
    // ,
    // {
    //     id: uuidv4(),
    //     nameFR: 'github',
    //     nameEN: 'github',
    //     src: github
    // },
    // {
    //     id: uuidv4(),
    //     nameFR: 'firebase',
    //     nameEN: 'firebase',
    //     src: firebase
    // },
    // {
    //     id: uuidv4(),
    //     nameFR: 'emailing',
    //     nameEN: 'emailing',
    //     src: email
    // },
    // {
    //     id: uuidv4(),
    //     nameFR: 'anglais: professionnel',
    //     nameEN: 'English spoken (with a French accent)',
    //     src: anglais
    // },
    // {
    //     id: uuidv4(),
    //     nameFR: 'maîtrise de l\'orthographe',
    //     nameEN: 'French spelling and grammar skills',
    //     src: francais
    // }
]

export default dataSkills