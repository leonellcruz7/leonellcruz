import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import './Work.css'


export default function Work() {
    const [num, setNum] = useState('')
    const animation = useAnimation()

    function enter() {
        animation.start({
            y: 0, opacity: 1
        })
    }

    function one(e) {
        e.preventDefault()
        setNum('one')
    }
    function two(e) {
        e.preventDefault()
        setNum('two')
    }
    function three(e) {
        e.preventDefault()
        setNum('three')
    }
    function four(e) {
        e.preventDefault()
        setNum('four')
    }

    const scrollVariant = {
        one: {
            y: 0,
        },
        two: {
            y: 34
        },
        three: {
            y: 70
        },
    }

    const workVariant = {
        one: {
            y: 0,
        },
        two: {
            y: -310
        },
        three: {
            y: -660
        },

    }

    const widthVariant = {
        one: {
            x: -65,
        },
        two: {
            x: 0
        },
        three: {
            x: -14
        },

    }







    return (
        <motion.div className="work"
            whileInView={enter}
            initial={{ y: 100, opacity: 0 }}
            animate={animation}
            transition={{ type: 'spring', duration: 1.5, bounce: .3 }}>
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <div className="content">
                            <div className="head">
                                <p className=' text1'>02.</p>
                                <h2>Background</h2>
                                <div className="divider"></div>
                            </div>
                            <div className="info">
                                <div className="category">
                                    <div className="scroll">
                                        <motion.div className="select"
                                            initial={{ y: 0, x: -2, }}
                                            variants={scrollVariant}
                                            animate={num}
                                            transition={{ type: 'spring', duration: .4, bounce: .3, delay: .2 }}>
                                            <div className="one"></div>
                                            <div className='sidecon'>
                                                <motion.div className="side"
                                                    initial={{ x: -65 }}
                                                    variants={widthVariant}
                                                    animate={num}
                                                    transition={{ type: 'spring', duration: .4, bounce: .2 }}></motion.div>

                                            </div>
                                        </motion.div>
                                    </div>
                                    <ul>
                                        <li onClick={one}>Teacher</li>
                                        <li onClick={two} className='two'>Graphic Designer</li>
                                        <li onClick={three} className='three'>Web Developer</li>
                                    </ul>
                                </div>
                                <div className="textcon">
                                    <motion.div className="text"
                                        initial={{ y: 0 }}
                                        variants={workVariant}
                                        animate={num}
                                        transition={{ type: 'spring', duration: .8, bounce: .3 }}>
                                        <div className="worklist w1">
                                            <h3>Special Education Teacher @ Tots @ Work DCFYL, Inc.</h3>
                                            <p>June 2016 - March 2021</p>
                                            <ul>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Create Individualized Program suitable for the specific needs of a particular child.</p></li>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Collaborate with other teachers, therapists and parents on how to implement the designed program.</p></li>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Create activities and visual aids to be used for daily lesson.</p></li>
                                            </ul>
                                        </div>
                                        <div className="worklist w2">
                                            <h3>Graphic Designer at iDigital Media</h3>
                                            <p>January - December 2021</p>
                                            <ul>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Produce visual concepts that will inform and captivate consumers, based on client requirements</p></li>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Create graphical content or logos for socialmedia, website, print ads, etc. using Adobe photoshop or Illustrator</p></li>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>Amend designs after feedback and ensure that final graphics and layouts are visually appealing and on-brand</p></li>
                                            </ul>
                                        </div>
                                        <div className="worklist w3">
                                            <h3>Web Dev Bootcamper at Zuitt</h3>
                                            <p>April 2022</p>
                                            <ul>
                                                <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" /><p>During this period I experienced building full stack websites. I was able to accomplish an Ecommerce Website and Coursebooking Website as a requirement for completion of  the bootcamp, using different tools and frameworks such as ReactJS and NodeJS. </p></li>

                                            </ul>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
