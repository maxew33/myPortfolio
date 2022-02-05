import React, { useState, useEffect, useMemo, Fragment, useContext } from 'react'
import { Context } from './context/languageContext'

import { v4 as uuidv4 } from 'uuid'

import SlideHome from './comp/SlideHome'
import SlideWork from './comp/SlideWork'
import SlideSkills from './comp/SlideSkills'
import SlideContact from './comp/SlideContact'

import english from './assets/donut.svg'
import french from './assets/croissant.svg'

import './app.css';
import ToggleLanguage from './comp/ToggleLanguage'

function App() {

  const [mySlide, setMySlide] = useState(0)
  const [wheel, setWheel] = useState(false)

  const [toggle, setToggle] = useState(true)

  const size = useWindowSize()

  const {language} = useContext(Context)

  // console.log('langue', language)

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

  }, [])

  useEffect(() => {
    // effect triggered when changing slide displayed
    console.log('chgt de slide')
  }, [mySlide])

  function slideAnim(direction) {

    let oldSlide

    console.log(size.width)

    oldSlide = mySlide
    oldSlide += direction

    // check if i can move or not
    if (oldSlide < 0 || oldSlide > 3) { (oldSlide = mySlide) }

    setMySlide(oldSlide)

    document.querySelector('.slide-container').style.transform = "translateX(" + 100 * -oldSlide + "vw)"
  }

  // changing the slide using the wheel
  const handleWheel = (e) => {
    if (wheel) {
      console.log('not now')
    }
    if (!wheel) {
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
    console.log('click', e.target, e.target.dataset.index)
    console.log(e.target.dataset.index - mySlide)
    slideAnim(e.target.dataset.index - mySlide)
  }

  // language toggle
  // const handleClickToggle = (e) => {
  //   if (toggle) {
  //     document.querySelector('.language-toggle-selector').classList.toggle('english-selected')

  //     setToggle(false)

  //     setTimeout(() => {
  //       setToggle(true)
  //     }, 350);
  //   }
  // }

  return (
    <div className="App">

      {/* arrow navigation */}
      {mySlide !== 0 && <div className="arrow" data-direction="left" onClick={() => slideAnim(-1)}>
        <div></div>
      </div>
      }

      {mySlide !== mySlideContent.length - 1 && <div className="arrow" data-direction="right" onClick={() => slideAnim(1)}>
        <div></div>
      </div>
      }

      <div className='banner'>
        <div className="icon">
          &#123;m&#125;
        </div>
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
        {/* <div className="language-toggle">
            <img
              className='language-toggle-img'
              src={french} />
            <div className="language-toggle-selector-container"
              onClick={handleClickToggle}>
              <div className="language-toggle-selector"></div>
            </div>
            <img
              className='language-toggle-img'
              src={english} />
          </div> */}

        <ToggleLanguage />

      </div>

      <div className="slide-container">
        {mySlideContent.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.nameFR === 'portfolio' ? <SlideWork slide={mySlide} size={size} /> : item.slideDisplayed}
            </Fragment>
          )
        })}
        <div className="overlay" onWheel={handleWheel}></div>
      </div>

    </div>
  )
}


// custom hook for window size and resizing
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize;
}

export default App;

