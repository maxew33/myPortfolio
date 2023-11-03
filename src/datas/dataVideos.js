import { v4 as uuidv4 } from 'uuid'

import Ben from '../assets/Ben.webp'
import Jerem from '../assets/jerem.webp'
import OC from '../assets/oc.webp'
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
import ticTacGhost from '../assets/tic-tac-ghost.webp'
import it from '../assets/it.webp'
import xFiles from '../assets/x-files.webp'
import restaurant from '../assets/restaurant.webp'
import newsletter from '../assets/newsletter.webp'
import cocktail from '../assets/cocktail.webp'
import landingPage from '../assets/landing-page.webp'

import capPatrimoine from '../assets/cap-patrimoine.webp'
import evilDot from '../assets/evil-dot.webp'
import csshoot from '../assets/csshoot.webp'
import diceGame from '../assets/dice-game.webp'
import jackpot from '../assets/jackpot.webp'
import matrixLoader from '../assets/matrix-loader.webp'

// eslint-disable-next-line no-sparse-arrays
const dataTvShow = [
    {
        id: uuidv4(),
        nameFR: 'Portfolio graphiste',
        nameEN: 'Graphic designer portfolio',
        src: process.env.PUBLIC_URL + ' /video/jerem.mp4',
        sound: true,
        prezFR: 'Portfolio de Jérémie Bonne',
        prezEN: 'Jérémie Bonne\'s portfolio',
        txtFR: 'Portfolio de Jérémie Bonne, graphiste et lettring artist bordelais.',
        txtEN: 'Portfolio of Jérémie Bonne, Graphic Designer and Bordeaux-based Lettering Artist',
        thumb: Jerem,
        youtubeLink: false,
        directLink: 'https://jeremie-bonne.fr/',
        gitHubLink: 'https://github.com/maxew33/jeremieHassoun',
        codePenLink: false
    },
    {
        id: uuidv4(),
        nameFR: 'Portfolio photographe',
        nameEN: 'Photographer\'s portfolio',
        src: process.env.PUBLIC_URL + ' /video/Ben.mp4',
        sound: true,
        prezFR: 'Portfolio de Benedict Priam',
        prezEN: 'Benedict Priam\'s portfolio',
        txtFR: 'Portfolio de Benedict Priam, photographe sur Bordeaux et Libourne.',
        txtEN: 'Benedict Priam\'s Portfolio, french photograph.',
        thumb: Ben,
        youtubeLink: false,
        directLink: 'https://maxime-malfilatre.com/sandbox/BenPriam/',
        gitHubLink: 'https://github.com/maxew33/portfolio-photographer-priam',
        codePenLink: false
    },
    {
        id: uuidv4(),
        nameFR: 'Cabinet Cap Patrimoine',
        nameEN: 'Cabinet Cap Patrimoine',
        src: process.env.PUBLIC_URL + ' /video/cap-patrimoine.mp4',
        sound: false,
        prezFR: 'Site du cabinet de gestion patrimoniale Cap Patrimoine',
        prezEN: 'Website of the asset management firm Cap Patrimoine',
        txtFR: 'Site du cabinet de gestion patrimoniale Cap Patrimoine',
        txtEN: 'Website of the asset management firm Cap Patrimoine',
        thumb: capPatrimoine,
        youtubeLink: false,
        directLink: 'https://cabinet-cap-patrimoine.fr',
        gitHubLink: 'https://github.com/maxew33/capPatrimoine',
        codePenLink: false
    },
    {
        id: uuidv4(),
        nameFR: 'projets openClassrooms',
        nameEN: 'openClassrooms\' projects',
        src: process.env.PUBLIC_URL + ' /video/oc-projects.mp4',
        sound: true,
        prezFR: 'projets openClassrooms',
        prezEN: 'openClassrooms\' projects',
        txtFR: 'Présentation de l\'ensemble des projets de la formation développeur d\'application javascript react open classrooms',
        txtEN: 'Presentation of all projects from the OpenClassrooms JavaScript React application developer training.',
        thumb: OC,
        youtubeLink: false,
        directLink: 'https://maxime-malfilatre.com/sandbox/BenPriam/',
        gitHubLink: 'https://github.com/maxew33/portfolio-photographer-priam',
        codePenLink: false
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
        directLink: 'https://maxime-malfilatre.com/sandbox/newsletter/',
        gitHubLink: 'https://github.com/maxew33/newsletter',
        codePenLink: 'https://codepen.io/maxew33/pen/bGYERvz'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/ticTacGhost/',
        gitHubLink: "https://github.com/maxew33/tic-tac-ghost",
        codePenLink: 'https://codepen.io/maxew33/pen/NWvRLPV'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/cocktail/',
        gitHubLink: 'https://github.com/maxew33/cocktail',
        codePenLink: 'https://codepen.io/maxew33/pen/YzVrWqB'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/maxamp/',
        gitHubLink: 'https://github.com/maxew33/maxamp',
        codePenLink: 'https://codepen.io/maxew33/pen/XWRvWdY'
    },
    /*
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
        directLink: 'https://maxime-malfilatre.com/sandbox/landingPage/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/NWgvVVa'
    },
    {
        id: uuidv4(),
        nameFR: 'Robocop',
        nameEN: 'Robocop',
        src: process.env.PUBLIC_URL + ' /video/defi-7.mp4',
        sound: true,
        prezFR: 'Enzo Ustariz présente...',
        prezEN: 'Enzo Ustariz presents...',
        txtFR: 'Enzo "le designer du web" Ustariz, développeur full stack et youtubeur (35k abonnées), analyse mon code d\'une page de la société OCP introduisant son produit phare : l\'ED-209. (Réalisé dans le cadre d\'un défi discord).',
        txtEN: 'Enzo "le designer du web" Ustariz, full stack developer and youtuber (35k subscribers), analyzes my code of a page from the company OCP introducing its flagship product: the ED-209. (Made as part of a discord challenge).',
        thumb: robocop,
        youtubeLink: 'https://youtu.be/CbWv29ar71c?t=683',
        directLink: 'https://maxime-malfilatre.com/sandbox/robocop/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/zYZVdQV'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/restaurantMenu/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/xxLzMoY'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/flipBook/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/LYjKNVx'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/carousel3D/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/QWpgyBQ'
    },
    {
        id: uuidv4(),
        nameFR: 'Casino',
        nameEN: 'Casino',
        src: process.env.PUBLIC_URL + ' /video/jackpot.mp4',
        sound: false,
        prezFR: '',
        prezEN: '',
        txtFR: 'Une machine à sous (Réalisé dans le cadre d\'un challenge codepen).',
        txtEN: 'A machine slot (Made as part of a codepen challenge).',
        thumb: jackpot,
        youtubeLink: false,
        directLink: false,
        gitHubLink: 'https://github.com/maxew33/machine-slot',
        codePenLink: 'https://codepen.io/maxew33/full/gOorpMX'
    },
    {
        id: uuidv4(),
        nameFR: 'Csshoot',
        nameEN: 'Csshoot',
        src: process.env.PUBLIC_URL + ' /video/csshoot.mp4',
        sound: false,
        prezFR: 'jeu de tir en pur css',
        prezEN: 'pure css shoot game',
        txtFR: 'jeu de tir en pur css codé en direct lors des sessions de live code sur twitch.',
        txtEN: 'A pure css game, no js and no image, just html, css and dash of love (made during twitch live code session)',
        thumb: csshoot,
        youtubeLink: false,
        directLink: false,
        gitHubLink: 'https://github.com/maxew33/csshoot-game',
        codePenLink: 'https://codepen.io/maxew33/full/dyeomwM'
    },
    {
        id: uuidv4(),
        nameFR: 'The game',
        nameEN: 'The game',
        src: process.env.PUBLIC_URL + ' /video/dice-game.mp4',
        sound: false,
        prezFR: 'Jeu de dés',
        prezEN: 'Dice game',
        txtFR: 'Un petit jeu de dés où l\'on peut jouer contre une autre personne ou contre une IA (Max).',
        txtEN: 'A little dice game. You can play against another human being or versus Max, the AI.',
        thumb: diceGame,
        youtubeLink: false,
        directLink: false,
        gitHubLink: 'https://github.com/maxew33/dice-game',
        codePenLink: 'https://codepen.io/maxew33/full/abqbmJR'
    },
    {
        id: uuidv4(),
        nameFR: 'Matrix',
        nameEN: 'Matrix',
        src: process.env.PUBLIC_URL + ' /video/matrix-loader.mp4',
        sound: false,
        prezFR: '',
        prezEN: '',
        txtFR: 'Un loader dans le style de Matrix. Quelle pilule prendrez-vous ?',
        txtEN: 'A Matrix loader. Wich pill will you take ?',
        thumb: matrixLoader,
        youtubeLink: false,
        directLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/poLpQza'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/kaleidoscope/',
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
        directLink: 'https://maxime-malfilatre.com/sandbox/infernalForm/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/VwzWrRJ'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/textShadow/',
        gitHubLink: 'https://github.com/maxew33/neon-txt',
        codePenLink: 'https://codepen.io/maxew33/pen/OJjOOVZ'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/knockoutText/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/VwzqYJO'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/tabs/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/rNyBYBK'
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
        directLink: 'https://maxime-malfilatre.com/sandbox/drawingBat/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/eYEgzLo'
    },
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
        directLink: 'https://maxime-malfilatre.com/sandbox/halloweenInput/',
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/pen/bGrdxZj'
    },
    {
        id: uuidv4(),
        nameFR: 'X-files',
        nameEN: 'X-files',
        src: process.env.PUBLIC_URL + ' /video/404-error.mp4',
        sound: false,
        prezFR: 'La page est ailleurs',
        prezEN: 'The page is out there',
        txtFR: 'La page est ailleurs',
        txtEN: 'The page is out there.',
        thumb: xFiles,
        youtubeLink: false,
        directLink: 'https://maxime-malfilatre.com/sandbox/404error/',
        gitHubLink: 'https://github.com/maxew33/error-404-space',
        codePenLink: 'https://codepen.io/maxew33/pen/BaZGRwy'
    },
    {
        id: uuidv4(),
        nameFR: 'Evil dot',
        nameEN: 'Evil dot',
        src: process.env.PUBLIC_URL + ' /video/evil-dot.mp4',
        sound: false,
        prezFR: 'evil dot',
        prezEN: 'evil dot',
        txtFR: 'Dans le chargemebt avec les trois points, il parait qu\'il y en a un qui serait jaloux ...',
        txtEN: 'In the 3 dots loading animation, what does the middle one think about the others ? ',
        thumb: evilDot,
        youtubeLink: false,
        directLink: false,
        gitHubLink: false,
        codePenLink: 'https://codepen.io/maxew33/full/MWVVaWE'
    }
    */
]

export default dataTvShow