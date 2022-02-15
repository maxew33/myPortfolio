import { v4 as uuidv4 } from 'uuid'

import theOffice from '../assets/the-office.webp'
import Ben from '../assets/Ben.webp'
import maxamp from '../assets/maxamp.webp'
import infernalForm from '../assets/infernal-form.webp'
import kaleidoscope from '../assets/kaleidoscope.webp'
import friends from '../assets/friends.webp'
import robocop from '../assets/robocop.webp'
import bookStyle from '../assets/book-style.webp'
import RickAndMorty from '../assets/rick-n-morty.webp'
import letSParty from '../assets/let-s-party.webp'
import routourne from '../assets/routourne.webp'
import bat from '../assets/bat.webp'
import halloween from '../assets/halloween.webp'
import ticTacGhost from '../assets/tic-tac-ghost.webp'
import it from '../assets/it.webp'
import xFiles from '../assets/x-files.webp'
import restaurant from '../assets/restaurant.webp'
import newsletter from '../assets/newsletter.webp'
import cocktail from '../assets/cocktail.webp'
import landingPage from '../assets/landing-page.webp'

const dataTvShow = [
    // {
    //     id: uuidv4(),
    //     nameFR: 'The office',
    //     nameEN: 'The office',
    //     src: process.env.PUBLIC_URL + ' /video/ben-video.mp4',
    //     sound: true,
    //     prezFR: 'Mon environnement de travail',
    //     prezEN: 'My working environment',
    //     txtFR: 'Une présentation de mon environnement de travail actuel : un PC portable HP OMEN 17\'\' (windows10, processeur intel I5, 8.0GB de RAM et une carte graphique intel hd graphics 630) avec un second écran samsung de 21\'\'.',
    //     txtEN: 'Here I am, working on my laptop : a HP OMEN 17\'\' (windows10, intel core i5, cpu@ 2.50GHz, 8.0GB RAM, intel hd graphics 630) with my second screen ( samsung, 21\'\'.)',
    //     thumb: theOffice,
    //     youtubeLink: false,
    //     gitHubLink: false,
    //     codePenLink: false
    // },
    {
        id: uuidv4(),
        nameFR: 'Ben',
        nameEN: 'Ben',
        src: process.env.PUBLIC_URL + ' /video/Ben.mp4',
        sound: true,
        prezFR: 'Portfolio de Benedict Priam',
        prezEN: 'Benedict Priam\'s portfolio',
        txtFR: 'Portfolio de Benedict Priam, photographe sur Bordeaux et Libourne.',
        txtEN: 'Benedict Priam\'s Portfolio, french photograph.',
        thumb: Ben,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/portfolio-photographer-priam',
        codePenLink: false
    },
    {
        id: uuidv4(),
        nameFR: 'Cocktail',
        nameEN: 'Cocktail',
        src: process.env.PUBLIC_URL + ' /video/cocktail.mp4',
        sound: false,
        prezFR: '627 recettes de cocktails',
        prezEN: '627 cocktails recipes',
        txtFR: 'Catalogue de cocktails issus de l\'API TheCocktailDB. Une transition circulaire permet de passer de liste des cocktails à la recette du cocktail selectionné.',
        txtEN: 'Catalog of cocktails from TheCocktailDB API. A circular transition allows you to go from the list of cocktails to the recipe of the selected cocktail.',
        thumb: cocktail,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/cocktail',
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        nameFR: 'Vous avez un message.',
        nameEN: 'You\'ve got a mail.',
        src: process.env.PUBLIC_URL + ' /video/newsletter.mp4',
        sound: false,
        prezFR: 'Newsletter en HTML',
        prezEN: 'An HTML newsletter',
        txtFR: 'Cette newsletter a été codée en prenant en compte toutes les contraintes liées au mailing (imbrication de tableaux, css inline).',
        txtEN: 'This newsletter has been coded with all the constraints related to mailing (nesting of tables, css inline).',
        thumb: newsletter,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/newsletter',
        codePenLink: 'https://codepen.io/maxew33/full/bGYERvz'
    },
    {
        id: uuidv4(),
        nameFR: 'landing page',
        nameEN: 'landing page',
        src: process.env.PUBLIC_URL + ' /video/landing-page.mp4',
        sound: false,
        prezFR: 'Landing page d\'une agence de voyage',
        prezEN: 'A travel agency landing page',
        txtFR: 'Le but est de créer une page qui présente efficacement et élégamment le service proposé. Il y a également un effet de transition entre le light et le dark mode.(Réalisé dans le cadre d\'un challenge discord).',
        txtEN: 'The goal is to create a page presents the service offered, I want it to be neat and effective. There is also a nice transition effect between light and dark mode. (Realized as part of a discord challenge).',
        thumb: landingPage,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWgvVVa'
    },
    {
        id: uuidv4(),
        nameFR: 'Robocop',
        nameEN: 'Robocop',
        src: process.env.PUBLIC_URL + ' /video/defi-7.mp4',
        sound: true,
        prezFR: 'Enzo Ustariz présente...',
        prezEN: 'Enzo Ustariz presents...',
        txtFR: 'Enzo "le designer du web" Ustariz, développeur fullstack et youtubeur (25k abonnées), analyse mon code d\'une page de la société OCP introduisant son produit phare : l\'ED-209. (Réalisé dans le cadre d\'un défi discord).',
        txtEN: 'Enzo "le designer du web" Ustariz, fullstack developer and youtuber (25k subscribers), analyzes my code of a page from the company OCP introducing its flagship product: the ED-209. (Made as part of a discord challenge).',
        thumb: robocop,
        youtubeLink: 'https://youtu.be/CbWv29ar71c?t=683',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/zYZVdQV'
    },
    {
        id: uuidv4(),
        nameFR: 'Bagdad café',
        nameEN: 'Out of Rosenheim',
        src: process.env.PUBLIC_URL + ' /video/cpc-text.mp4',
        sound: false,
        prezFR: 'Bon appétit!',
        prezEN: 'Bon appétit !',
        txtFR: 'Mise en page d\'un menu de trois plats. En tirant sur la languette la description du plat apparait (Réalisé dans le cadre d\'un challenge codepen)',
        txtEN: 'The goal of this challenge was to design this restaurant\'s card. By pulling the tab, you can see the description of the meal. (Realized as a part of a codepen challenge).',
        thumb: restaurant,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/xxLzMoY'
    },
    {
        id: uuidv4(),
        nameFR: 'Un jour, un livre',
        nameEN: 'Un jour, un livre',
        src: process.env.PUBLIC_URL + ' /video/cpc-book-style.mp4',
        sound: false,
        prezFR: 'Un extrait de Mrs Dalloway.',
        prezEN: 'An excerpt of Mrs Dalloway.',
        txtFR: 'L\'objectif était de mettre en page un extrait de Mrs Dalloway. Et comment mettre en page un extrait de Virginia Woolf ? En en faisant un livre ! (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'The goal of this challenge was to make this excerpt of Virginia Woolf\'s Mrs Dalloway both legible and eyecatching. So, I use the old way : put it in an old fashioned book. You can open the book and turn the pages by clicking on them. (Made as part of a discord challenge).',
        thumb: bookStyle,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/LYjKNVx'
    },
    {
        id: uuidv4(),
        nameFR: 'Maxamp',
        nameEN: 'Maxamp',
        src: process.env.PUBLIC_URL + ' /video/maxamp.mp4',
        sound: false,
        prezFR: 'musique',
        prezEN: 'enjoy the music',
        txtFR: 'Clone de winamp avec la plupart de ses fonctionnalités (lecture, pause, lecture aléatoire, volume, playlist et navigation dans la playlist ...).',
        txtEN: 'Clone of winamp with almost all of its features (play, pause, shuffle, volume, playlist and navigation...).',
        thumb: maxamp,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/maxamp',
        codePenLink: 'https://codepen.io/maxew33/full/XWRvWdY'
    },
    {
        id: uuidv4(),
        nameFR: 'Rick et Morty',
        nameEN: 'Rick and Morty',
        src: process.env.PUBLIC_URL + ' /video/defi-5.mp4',
        sound: true,
        prezFR: 'Enzo Ustariz contre attaque',
        prezEN: 'Enzo Ustariz strikes back',
        txtFR: 'Enzo "le designer du web" Ustariz analyse mon code sur un slider en 3D utilisant l\'API de Rick et Morty. (Réalisé dans le cadre d\'un défi discord).',
        txtEN: 'Enzo "le designer du web" Ustariz analyzes my code of a 3D slider using the Rick and Morty API. (Made as part of a discord challenge).',
        thumb: RickAndMorty,
        youtubeLink: 'https://youtu.be/2ogH9PKILqY?t=339',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/QWpgyBQ'
    },
    {
        id: uuidv4(),
        nameFR: 'Ghostbusters',
        nameEN: 'Ghostbusters',
        src: process.env.PUBLIC_URL + ' /video/cpc-bad-buttons.mp4',
        sound: false,
        prezFR: 'Tic tac ghost',
        prezEN: 'Tic tac ghost',
        txtFR: 'Un jeu de morpion sur le thème d\'halloween, avec une IA presqu\'imbattable (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'A Halloween-themed tic tac toe, with an almost unbeatable AI (Made as part of a codepen challenge).',
        thumb: ticTacGhost,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/NWvRLPV'
    },
    {
        id: uuidv4(),
        nameFR: 'Mirrors',
        nameEN: 'Mirrors',
        src: process.env.PUBLIC_URL + ' /video/kaleidoscope.mp4',
        sound: false,
        prezFR: 'kaleidoscope',
        prezEN: 'kaleidoscope',
        txtFR: 'kaleidscope codé uniquement en HTML et css, sans javascript.',
        txtEN: 'Pure css kaleidoscope (no javascript).',
        thumb: kaleidoscope,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/kaleidoscope',
        codePenLink: 'https://codepen.io/maxew33/pen/VwWqqor'
    },
    {
        id: uuidv4(),
        nameFR: 'Questionnaire infernal',
        nameEN: 'Infernal form',
        src: process.env.PUBLIC_URL + ' /video/infernal-form.mp4',
        sound: false,
        prezFR: 'Pire qu\'un document de la sécu !',
        prezEN: 'Can you fill it ?',
        txtFR: 'Vous avez cinq minutes pour compléter cette invitation, une citrouille est là pour vous aider (ou pas). Bon courage (ne pas mettre ça dépend, parce que ça dépasse). (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'In order to join this awesome party, you just need to fill this tiny weenie form in less than 5 minutes. Can you fill it ? (Realized as part of a codepen challenge).',
        thumb: infernalForm,
        youtubeLink: false,
        gitHubLink: 'https://github.com/maxew33/cocktail',
        codePenLink: 'https://codepen.io/maxew33/full/VwzWrRJ'
    },
    {
        id: uuidv4(),
        nameFR: 'Friends',
        nameEN: 'Friends',
        src: process.env.PUBLIC_URL + ' /video/cpc-text-shadow.mp4',
        sound: false,
        prezFR: 'Animation en pur CSS',
        prezEN: 'Pure CSS animation',
        txtFR: 'L\'objectif de cette animation était d\'utiliser au mieux la propriété text-shadow sur le texte "Good morning friends". J\'ai décidé d\'en faire une enseigne lumineuse rappelant celles que l\'on peut voir dans les séries américaines. (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'The goal of this animation was to make the best use of the text-shadow property on the "Good morning friends" text. When I read "good morning friends", I remembered the café\'s neon sign that flickers in the US tv shows. So I made a bright text shadow in order to have the neon aspect. (Realized as part of a codepen challenge).',
        thumb: friends,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/OJjOOVZ'
    },
    {
        id: uuidv4(),
        nameFR: 'Staying alive',
        nameEN: 'Staying alive',
        src: process.env.PUBLIC_URL + ' /video/cpc-knock-out.mp4',
        sound: false,
        prezFR: 'Let\'s Party !',
        prezEN: 'Let\'s Party !',
        txtFR: 'La contrainte de ce challenge était de faire un knockout ou cutout : un texte qui révèle une image d\'arrière plan. (Réalisé dans le cadre d\'un challenge codepen)',
        txtEN: 'The constraint of this challenge was to make a knockout or cutout: a text that reveals a background image. (Realized as part of a codepen challenge)',
        thumb: letSParty,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/VwzqYJO'
    },
    {
        id: uuidv4(),
        nameFR: 'Volte-face',
        nameEN: 'Face/Off',
        src: process.env.PUBLIC_URL + ' /video/defi-3.mp4',
        sound: true,
        prezFR: 'Le retour d\'Enzo Ustariz ',
        prezEN: 'The return of Enzo Ustariz ',
        txtFR: 'Enzo "le designer du web" Ustariz revient sur une de mes productions : le formulaire à onglets. (Réalisé dans le cadre d\'un défi discord).',
        txtEN: 'Enzo "le designer du web" Ustariz talks about one of my productions: the tabbed form. (Made as part of a discord challenge)',
        thumb: routourne,
        youtubeLink: 'https://youtu.be/tBN16ReqkUw?t=1148',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/rNyBYBK'
    },
    {
        id: uuidv4(),
        nameFR: 'La Linea',
        nameEN: 'La Linea',
        src: process.env.PUBLIC_URL + ' /video/happy-halloween-1.mp4',
        sound: false,
        prezEN: 'Happy halloween !',
        prezFR: 'Happy halloween !',
        txtFR: 'Une animation d\'halloween à base de svg laissant apparaître une chauve-souris qui s\'envole (désolé pour le spoil).',
        txtEN: 'An svg-based halloween animation featuring a flying bat (sorry for the spoiler).',
        thumb: bat,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/eYEgzLo'
    },
    // {
    //     id: uuidv4(),
    //     nameFR: 'Halloween',
    //     nameEN: 'Halloween',
    //     src: process.env.PUBLIC_URL + ' /video/happy-halloween-2.mp4',
    //     sound: false,
    //     prezFR: 'Scary Halloween',
    //     prezEN: 'Scary Halloween',
    //     txtFR: 'CSS art : une tête de mort dessiné en pur css.',
    //     txtEN: 'CSS art : a pure css skull.',
    //     thumb: halloween,
    //     youtubeLink: false,
    //     gitHubLink: false,
    //     codePenLink: 'https://codepen.io/maxew33/full/XWaeRgL'
    // },
    {
        id: uuidv4(),
        nameFR: 'ça',
        nameEN: 'It',
        src: process.env.PUBLIC_URL + ' /video/cpc-input.mp4',
        sound: false,
        prezFR: 'Ils flottent tous en-bas',
        prezEN: 'You\'ll float too',
        txtFR: 'Un humble hommage à une histoire qui a traumatisé toute une génération (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'A humble tribute to a story that traumatized an entire generation (Made as part of a codepen challenge).',
        thumb: it,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/bGrdxZj'
    },
    {
        id: uuidv4(),
        nameFR: 'X-files',
        nameEN: 'X-files',
        src: process.env.PUBLIC_URL + ' /video/404-error.mp4',
        sound: false,
        prezFR: 'La page est ailleurs',
        prezEN: 'The page is out there',
        txtFR: 'Nananananana nananananana nananananana nananananana',
        txtEN: 'Nananananana nananananana nananananana nananananana',
        thumb: xFiles,
        youtubeLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/BaZGRwy'
    }
]

export default dataTvShow