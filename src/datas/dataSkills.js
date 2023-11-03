import { v4 as uuidv4 } from 'uuid'

import firebase from '../assets/firebase.svg'
import figma from '../assets/figma.svg'
import sass from '../assets/Sass.svg'
import ts from '../assets/ts.svg'
import react from '../assets/react.svg'

const dataSkills = [
    {
        id: uuidv4(),
        nameFR: 'REACT',
        nameEN: 'REACT',
        src: react
    },
    {
        id: uuidv4(),
        nameFR: 'typescript',
        nameEN: 'typescript',
        src: ts
    },
    {
        id: uuidv4(),
        nameFR: 'SASS',
        nameEN: 'SASS',
        src: sass
    },
    {
        id: uuidv4(),
        nameFR: 'Firebase',
        nameEN: 'Firebase',
        src: firebase
    },
    {
        id: uuidv4(),
        nameFR: 'Figma',
        nameEN: 'Figma',
        src: figma
    },

]

export default dataSkills