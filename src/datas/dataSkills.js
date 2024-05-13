import { v4 as uuidv4 } from 'uuid'

import firebase from '../assets/firebase.svg'
import figma from '../assets/figma.svg'
import sass from '../assets/Sass.svg'
import ts from '../assets/ts.svg'
import react from '../assets/react.svg'
import next from '../assets/Next.svg'
import framer from '../assets/framer.svg'
import prisma from '../assets/prisma.svg'

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
    {
        id: uuidv4(),
        nameFR: 'Next',
        nameEN: 'Next',
        src: next
    },    
    {
        id: uuidv4(),
        nameFR: 'Prisma',
        nameEN: 'Figma',
        src: prisma
    },
    {
        id: uuidv4(),
        nameFR: 'Framer',
        nameEN: 'Framer',
        src: framer
    },

]

export default dataSkills