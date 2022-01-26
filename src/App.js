import React, { useState, useEffect, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import SlideHome from './comp/SlideHome'
import SlideWork from './comp/SlideWork'
import SlideSkills from './comp/SlideSkills'
import SlideContact from './comp/SlideContact'

import './app.css';

function App() {

  const [mySlide, setMySlide] = useState(0)
  const [wheel, setWheel] = useState(false)

  const size = useWindowSize()

  const mySlideContent = [
    {
      name: 'accueil',
      slideDisplayed: <SlideHome />,
      id: uuidv4()
    },
    {
      name: 'portfolio',
      slideDisplayed: <SlideWork slide={mySlide}/>,
      id: uuidv4()
    },
    {
      name: 'compétences',
      slideDisplayed: <SlideSkills />,
      id: uuidv4()
    },
    {
      name: 'contact',
      slideDisplayed: <SlideContact />,
      id: uuidv4()
    }

  ]

  useEffect(() => {
    console.log(`
 ____              _                  
|  _ \\            (_)                 
| |_) | ___  _ __  _  ___  _   _ _ __ 
|  _ < / _ \\| '_ \\| |/ _ \\| | | | '__|
| |_) | (_) | | | | | (_) | |_| | |   
|____/ \\___/|_| |_| |\\___/ \\__,_|_|
                 _/ |                 
                |__/               `)

  }, [])

  useEffect(() => {
    // effect triggered when changing slide displayed

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

  return (
    <div className="App">

      {mySlide !== 0 && <div className="arrow" data-direction="left" onClick={() => slideAnim(-1)}>
        &#8592;
      </div>
      }

{mySlide !== mySlideContent.length - 1 && <div className="arrow" data-direction="right" onClick={() => slideAnim(1)}>
        &#8594;
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
                {item.name}
              </li>
            )
          })}
        </ul>
        <div className="language-toggle">
          lang
        </div>

      </div>

      <div className="slide-container">
        {mySlideContent.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.slideDisplayed}
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

