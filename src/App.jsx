
import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Work from './Components/Work';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Things from './Components/Things';
import Contact from './Components/Contact';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { RiMenu5Fill } from 'react-icons/ri'
import { GrFormClose } from 'react-icons/gr'





library.add(faCaretRight)

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const work = useRef(null)
  const things = useRef(null)
  const contact = useRef(null)
  const [toggle, setToggle] = useState(false)
  const [status, setStatus] = useState('close')

  function open(e) {
    e.preventDefault()
    setToggle(!toggle)
    setStatus('open')


  }

  function close(e) {
    e.preventDefault()

    setToggle(!toggle)
    setStatus('close')
  }

  const menuVariant = {
    'open': {
      x: 15
    },
    'close': {
      x: 530
    }
  }

  const [dotEffect, setDotEffect] = useState('')

  const dotVariant = {
    home: {
      x: 24,
      opacity: 1
    },
    about: {
      x: 140,
      opacity: 1
    },
    work: {
      x: 253,
      opacity: 1
    },
    things: {
      x: 370,
      opacity: 1
    },
    contact: {
      x: 497,
      opacity: 1
    },

  }

  function scroll(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }

  function viewresume() {
    window.open(
      'https://drive.google.com/file/d/1-FnN2GW2kT7yaQUBRZWeUMP_MhNP33fH/view?usp=sharing',
      '_blank'
    )
  }


  return (
    <div className="app">

      <div className="navbar">
        <div className="mdCon">
          <div className="row">
            <motion.div className="col6 logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .7 }}>
              <img src={require('./img/leologo.png')} />
            </motion.div>
            <div className="col6 desktoplist list">
              <ul>
                <motion.div className="dot"
                  variants={dotVariant}
                  animate={dotEffect}
                  initial={{ x: 24, opacity: 0 }}></motion.div>
                <motion.li
                  onMouseEnter={() => setDotEffect('home')}
                  onClick={() => scroll(home)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7 }}><span className='num'>01.</span>home</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('about')}
                  onClick={() => scroll(about)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7 }}><span className='num'>02.</span>about</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('work')}
                  onClick={() => scroll(work)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .1 }}><span className='num'>03.</span>work</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('things')}
                  onClick={() => scroll(things)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .2 }}><span className='num'>04.</span>things</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('contact')}
                  onClick={() => scroll(contact)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .3 }}><span className='num'>05.</span>contact</motion.li>
                <div className="btn">
                  <motion.button
                    onClick={viewresume}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: .7, delay: .4 }}>Resume</motion.button>
                </div>
              </ul>
            </div>
            <motion.div className="col6 mobilelist list"
              initial={{ x: 530 }}
              variants={menuVariant}
              animate={status}
              transition={{ type: 'spring', duration: .6 }}>
              <ul>
                <motion.li
                  onMouseEnter={() => setDotEffect('home')}
                  onTap={close}
                  onClick={() => scroll(home)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7 }}><span className='num'>01.</span>home</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('about')}
                  onTap={close}
                  onClick={() => scroll(about)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7 }}><span className='num'>02.</span>about</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('work')}
                  onTap={close}
                  onClick={() => scroll(work)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .1 }}><span className='num'>03.</span>work</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('things')}
                  onTap={close}
                  onClick={() => scroll(things)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .2 }}><span className='num'>04.</span>things</motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect('contact')}
                  onTap={close}
                  onClick={() => scroll(contact)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: .7, delay: .3 }}><span className='num'>05.</span>contact</motion.li>
                <li>
                  <div className="btn">
                    <motion.button
                      onClick={viewresume}
                      onTap={close}
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: 'spring', duration: .7, delay: .4 }}>Resume</motion.button>
                  </div>
                </li>
              </ul>
            </motion.div>
            <div className="menu">
              {toggle ?
                <GrFormClose className='close' onClick={close} />
                :

                <RiMenu5Fill className='open' onClick={open} />
              }


            </div>
          </div>
        </div>
      </div >
      <div ref={home}>
        <Landing />
      </div>
      <div ref={about} >
        <About />
      </div>
      <div ref={work} >
        <Work />
      </div>
      <div ref={things} >
        <Things />
      </div>
      <div ref={contact}>
        <Contact />
      </div>


    </div >
  );
}

export default App;
