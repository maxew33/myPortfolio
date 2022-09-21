import React, { useState, useEffect, useMemo, useContext } from 'react'
import { Context } from './context/languageContext'

import { Helmet } from 'react-helmet'
import { useSwipeable } from 'react-swipeable'
import { v4 as uuidv4 } from 'uuid'

import SlideHome from './comp/SlideHome'
import SlideWork from './comp/SlideWork'
import SlideSkills from './comp/SlideSkills'
import SlideContact from './comp/SlideContact'
import BurgerMenu from './comp/BurgerMenu'

import './app.css'
import './style/responsive.css'
import ToggleLanguage from './comp/ToggleLanguage'
import useWindowSize from './comp/useWindowSize'
import SocialNetwork from './comp/SocialNetwork'

function App() {

  const [mySlide, setMySlide] = useState(0)
  const [wheel, setWheel] = useState(false)
  const [orientation, setOrientation] = useState('landscape')

  const size = useWindowSize()

  const { language } = useContext(Context)

  const mySlideContent = useMemo(() => {
    return [
      {
        nameFR: 'accueil',
        nameEN: 'home',
        slideDisplayed: <SlideHome />,
        id: uuidv4()
      },
      {
        nameFR: 'portfolio',
        nameEN: 'portfolio',
        slideDisplayed: <SlideWork />,
        id: uuidv4()
      },
      {
        nameFR: 'compétences',
        nameEN: 'skills',
        slideDisplayed: <SlideSkills />,
        id: uuidv4()
      },
      {
        nameFR: 'contact',
        nameEN: 'contact',
        slideDisplayed: <SlideContact />,
        id: uuidv4()
      }
    ]
  }, [])

  useEffect(() => {
    console.log(`
 _                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
      \\_________/
      
`)

    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')

  }, [])


  useEffect(() => {
    // effect triggered when changing viewport size
    size.height < size.width ? setOrientation('landscape') : setOrientation('portrait')
  }, [size])

  useEffect(() => {
    // effect triggered when changing viewport orientation    
    slideAnim(mySlide * -1)
  }, [orientation])

  function slideAnim(direction) {

    let oldSlide = mySlide

    oldSlide += direction

    // check if i can move or not
    if (oldSlide < 0 || oldSlide > 3) { (oldSlide = mySlide) }

    setMySlide(oldSlide)

    document.querySelector('.slide-container').style.transform = orientation === 'landscape' ? "translateX(" + 100 * -oldSlide + "vw)" : "translateY(" + 100 * -oldSlide + "vh)"
  }

  // changing the slide using the wheel
  const handleWheel = (e) => {
    let canMove = true

    if(e.target.dataset.id === 'thumb' || e.target.parentElement.dataset.id === 'thumb'){
      canMove = false
    }

    if (!wheel && canMove) {
      setWheel(true)

      setTimeout(() => {
        setWheel(false)
      }, 500);

      let direction = e.deltaY > 0 ? 1 : -1

      slideAnim(direction)
    }
  }

  // changig the slide by clicking on the slide wanted
  const handleClick = (e) => {
    slideAnim(e.target.dataset.index - mySlide)
  }
  const handleClickLogo = () => {
    console.log(123)
    slideAnim(-1 * mySlide)
  }

  // changig the slide by swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      orientation === 'landscape' && slideAnim(1)
    },
    onSwipedRight: () => {
      orientation === 'landscape' && slideAnim(-1)
    },
    onSwipedUp: () => {
      orientation === 'portrait' && slideAnim(1)
    },
    onSwipedDown: () => {
      orientation === 'portrait' && slideAnim(-1)
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
    delta: 75
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{language === 'FR' ? 'Maxime Malfilâtre développeur front-end sur Bordeaux' : 'Maxime Malfilâtre french front-end developer'}</title>
        <base target="_blank" href="https://www.maxime-malfilatre.com/" />

        <link rel="canonical" href="https://www.maxime-malfilatre.com/" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32"
          sizes="32x32"
        />

      </Helmet>
      
      <div className="App" onWheel={handleWheel} {...handlers}>

        {orientation === 'landscape' && <>
          {mySlide !== 0 && <div className="arrow" data-direction="left" onClick={() => slideAnim(-1)}>
            <div></div>
          </div>}


          {mySlide !== mySlideContent.length - 1 && <div className="arrow" data-direction="right" onClick={() => slideAnim(1)}>
            <div></div>
          </div>
          }
        </>}

        {orientation === 'portrait' && <BurgerMenu open={false} />}

        <div className='banner'>

          <div className="logo" onClick={handleClickLogo}>
            &#123;m&#125;
          </div>

          {orientation === 'portrait' && <SocialNetwork />}

          <ul className='navbar'>
            {mySlideContent.map((item, index) => {
              return (
                <li className={mySlide === index ? 'nav-items active' : 'nav-items'} key={item.id} data-index={index} onClick={handleClick}>
                  {language === 'FR' ? item.nameFR : item.nameEN}
                  {item.name}

                  <div className="underline"></div>
                </li>
              )
            })}
          </ul>

          <ToggleLanguage />

        </div>

        <div className="slide-container">
          {mySlideContent.map((item) => {
            return (
              <section className="slide-wrapper" key={item.id}>
                {item.nameFR === 'portfolio' ?
                  <SlideWork slide={mySlide} size={size} />
                  :
                  item.slideDisplayed}
              </section>
            )
          })}
        </div>

      </div >
    </>
  )
}

export default App;

