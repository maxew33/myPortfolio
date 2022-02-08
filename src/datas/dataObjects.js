import { v4 as uuidv4 } from 'uuid'

import beard from '../assets/beard.svg'
import beard2 from '../assets/beard2.svg'
import bowTie from '../assets/bow-tie.svg'
import fancy from '../assets/fancy.svg'
import glasses from '../assets/glasses.svg'
import hat1 from '../assets/hat1.svg'
import hat2 from '../assets/hat2.svg'
import helmet from '../assets/helmet.svg'
import mustache from '../assets/mustache.svg'
import mustache2 from '../assets/mustache2.svg'
import tie from '../assets/tie.svg'

const dataObjects = [
    {
        src: mustache,
        alt: "mustache",
        width: 'calc(45 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: glasses,
        alt: "sun glasses",
        width: 'calc(45 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: beard,
        alt: "big beard",
        width: 'calc(35* var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: bowTie,
        alt: "bow tie",
        width: 'calc(35 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: fancy,
        alt: "funny nose and glasses",
        width: 'calc(40 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: hat1,
        alt: "hat",
        width: 'calc(55 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: beard2,
        alt: "small beard",
        width: 'calc(35 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: hat2,
        alt: "sheriff hat",
        width: 'calc(55 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    // {
    //     src: tie,
    //     alt: "tie",
    //     width: 'calc(25 * var(--avatar-length-unit))',
    //     zIndex: 10,
    //     id: uuidv4()
    // },
    {
        src: helmet,
        alt: "helmet",
        width: 'calc(55 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    },
    {
        src: mustache2,
        alt: "simple mustache",
        width: 'calc(35 * var(--avatar-length-unit))',
        zIndex: 10,
        id: uuidv4()
    }
]

export default dataObjects