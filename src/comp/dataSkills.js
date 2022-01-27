import { v4 as uuidv4 } from 'uuid'


import html5 from '../assets/html.png'
import css3 from '../assets/css.png'
import sass from '../assets/Sass.svg'
import javascript from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import email from '../assets/email.png'
import anglais from '../assets/USK.png'
import francais from '../assets/pen.png'

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