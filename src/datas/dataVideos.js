import { v4 as uuidv4 } from 'uuid'

import theOffice from '../assets/the-office.png'
import friends from '../assets/friends.png'
import robocop from '../assets/robocop.png'
import bookStyle from '../assets/book-style.png'
import RickAndMorty from '../assets/rick-n-morty.png'
import letSParty from '../assets/let-s-party.png'
import routourne from '../assets/routourne.png'
import bat from '../assets/bat.png'
import halloween from '../assets/halloween.png'
import ticTacGhost from '../assets/tic-tac-ghost.png'
import it from '../assets/it.png'
import xFiles from '../assets/x-files.png'
import restaurant from '../assets/restaurant.png'
import newsletter from '../assets/newsletter.png'
import cocktail from '../assets/cocktail.png'
import landingPage from '../assets/landing-page.png'

const dataTvShow = [
    {
        id: uuidv4(),
        name: 'The office',
        src: process.env.PUBLIC_URL + ' /video/ben-video.mp4',
        sound: true,
        prez: 'Mon environnement de travail',
        txt: 'Une présentation de mon environnement de travail actuel : un PC portable HP OMEN 17\'\' (windows10, processeur intel I5, 8.0GB de RAM et une carte graphique intel hd graphics 630) avec un second écran samsung de 21\'\'',
        thumb: theOffice,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: false
    },
    {
        id: uuidv4(),
        name: 'Vous avez un message.',
        src: process.env.PUBLIC_URL + ' /video/newsletter.mp4',
        sound: false,
        prez: 'Newsletter en HTML',
        txt: 'Cette newsletter a été codée en prenant en compte toutes les contraintes liées au mailing (imbrication de tableaux, css inline).',
        thumb: newsletter,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/newsletter',
        codePenLink: 'https://codepen.io/maxew33/full/bGYERvz'
    },
    {
        id: uuidv4(),
        name: 'Cocktail',
        src: process.env.PUBLIC_URL + ' /video/cocktail.mp4',
        sound: false,
        prez: '627 recettes de cocktails',
        txt: 'Catalogue de cocktails issus de l\'API TheCocktailDB. Une transition circulaire permet de passer de liste des cocktails à la recette du cocktail selectionné.',
        thumb: cocktail,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/cocktail',
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        name: 'landing page',
        src: process.env.PUBLIC_URL + ' /video/landing-page.mp4',
        sound: false,
        prez: 'Landing page d\'une agence de voyage',
        txt: 'Le but est de créer une page qui présente efficacement et élégamment le service proposé. Il y a également un effet de transition entre le light et le dark mode.(Réalisé dans le cadre d\'un challenge discord).',
        thumb: landingPage,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWgvVVa'
    },
    {
        id: uuidv4(),
        name: 'Friends',
        src: process.env.PUBLIC_URL + ' /video/cpc-text-shadow.mp4',
        sound: false,
        prez: 'Animation en pur CSS',
        txt: 'L\'objectif de cette animation était d\'utiliser au mieux la propriété text-shadow sur le texte "Good morning friends". J\'ai décidé d\'en faire une enseigne lumineuse rappelant celles que l\'on peut voir dans les séries américaines. (Réalisé dans le cadre d\'un challenge codepen).',
        thumb: friends,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        name: 'Robocop',
        src: process.env.PUBLIC_URL + ' /video/defi-7.mp4',
        sound: true,
        prez: 'Enzo Ustariz présente...',
        txt: 'Enzo "le designer du web" Ustariz analyse mon code d\'une page de la société OCP introduisant son produit phare : l\'ED-209. (Réalisé dans le cadre d\'un défi discord).',
        thumb: robocop,
        youtubeLink: 'https://youtu.be/CbWv29ar71c?t=683',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/zYZVdQV'
    },
    {
        id: uuidv4(),
        name: 'Un jour, un livre',
        src: process.env.PUBLIC_URL + ' /video/cpc-book-style.mp4',
        sound: false,
        prez: 'Un extrait de Mrs Dalloway.',
        txt: 'L\'objectif était de mettre en page un extrait de Mrs Dalloway. Et comment mettre en page un extrait de Virginia Woolf ? En en faisant un livre ! (Réalisé dans le cadre d\'un challenge codepen).',
        thumb: bookStyle,
         youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/LYjKNVx'
    },
    {
        id: uuidv4(),
        name: 'Rick et Morty',
        src: process.env.PUBLIC_URL + ' /video/defi-5.mp4',
        sound: true,
        prez: 'Enzo Ustariz contre attaque',
        txt: 'Enzo "le designer du web" Ustariz analyse mon code sur un slider en 3D utilisant l\'API de Rick et Morty. (Réalisé dans le cadre d\'un défi discord).',
        thumb: RickAndMorty,
        youtubeLink: 'https://youtu.be/2ogH9PKILqY?t=339',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/QWpgyBQ'
    },
    {
        id: uuidv4(),
        name: 'Staying alive',
        src: process.env.PUBLIC_URL + ' /video/cpc-knock-out.mp4',
        sound: false,
        prez: 'Let\'s Party !',
        txt: 'La contrainte de ce challenge était de faire un knockout ou cutout : un texte qui révèle une image d\'arrière plan. (Réalisé dans le cadre d\'un challenge codepen)',
        thumb: letSParty,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/VwzqYJO'
    },
    {
        id: uuidv4(),
        name: 'Volte-face',
        src: process.env.PUBLIC_URL + ' /video/defi-3.mp4',
        sound: true,
        prez: 'Le retour d\'Enzo Ustariz ',
        txt: 'Enzo "le designer du web" Ustariz revient sur une de mes productions : le formulaire à onglets. (Réalisé dans le cadre d\'un défi discord)',
        thumb: routourne,
        youtubeLink: 'https://youtu.be/tBN16ReqkUw?t=1148',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/rNyBYBK'
    },
    {
        id: uuidv4(),
        name: 'D\'art d\'art',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-1.mp4',
        sound: false,
        prez: 'Happy halloween !',
        txt: 'Une animation d\'halloween à base de svg laissant apparaître une chauve-souris qui s\'envole (désolé pour le spoil).',
        thumb: bat,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/eYEgzLo'
    },
    {
        id: uuidv4(),
        name: 'Halloween',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-2.mp4',
        sound: false,
        prez: 'Scary Halloween',
        txt: 'CSS art : une tête de mort dessiné en pur css.',
        thumb: halloween,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/XWaeRgL'
    },
    {
        id: uuidv4(),
        name: 'Ghostbusters',
        src: process.env.PUBLIC_URL + ' /video/cpc-bad-buttons.mp4',
        sound: false,
        prez: 'Tic tac ghost',
        txt: 'Un jeu de morpion sur le thème d\'halloween, avec une IA presqu\'imbattable (Réalisé dans le cadre d\'un challenge codepen).',
        thumb: ticTacGhost,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWvRLPV'
    },
    {
        id: uuidv4(),
        name: 'ça',
        src: process.env.PUBLIC_URL + ' /video/cpc-input.mp4',
        sound: false,
        prez: 'Ils flottent tous en-bas',
        txt: 'Un humble hommage à une histoire qui a traumatisé toute une génération (Réalisé dans le cadre d\'un challenge codepen).',
        thumb: it,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/bGrdxZj'
    },
    {
        id: uuidv4(),
        name: 'X-files',
        src: process.env.PUBLIC_URL + ' /video/404-error.mp4',
        sound: false,
        prez: 'La page est ailleurs',
        txt: 'Nananananana nananananana nananananana nananananana',
        thumb: xFiles,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/BaZGRwy'
    },
    {
        id: uuidv4(),
        name: 'Chef Michel',
        src: process.env.PUBLIC_URL + ' /video/cpc-text.mp4',
        sound: false,
        prez: 'A taaable !',
        txt: 'Mise en page d\'un menu de trois plats. En tirant sur la languette la description du plat apparait (Réalisé dans le cadre d\'un challenge codepen)',
        thumb: restaurant,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/xxLzMoY'
    }
]

export default dataTvShow