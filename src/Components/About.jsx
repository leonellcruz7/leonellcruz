import React from 'react'
import './About.css'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function About() {
    const animation = useAnimation()
    const animation2 = useAnimation()

    function open(e) {
        animation.start({
            y: 0, opacity: 1
        })
    }

    function enter(e) {
        animation2.start({
            y: 0, opacity: 1
        })
    }
    return (
        <div className="about">
            <div className="mdCon">
                <div className="row">
                    <div className="col3">
                        <motion.div className="content"
                            whileInView={open}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1.5, bounce: .3 }}>
                            <div className="head">
                                <p className='numsection'>01.</p>
                                <h2>About me</h2>
                                <div className="divider"></div>
                            </div>
                            <div className="detail">
                                <p>Hello! My name is Leonell Cruz and I love things that require creativity and logical skills. I previously worked as a Special Education Teacher back in 2016 after  i finished my degree. Ever since, graphic design has always piqued my interest that is why i also worked as a part-time graphic designer. But as time progress I discovered that i have a lot more potential than just design, therefore I decided to level up my game and become a Web Developer. </p>
                                <p className='p2'>Currently I have been designing and developing websites using the following tools:</p>
                                <div className='tools'>
                                    <div>
                                        <p className='title text1'>Frontend</p>
                                        <ul>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />HTML</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />CSS</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />Bootstrap</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />ReactJs</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='title text1'>Backend</p>
                                        <ul>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />JavaScript</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />NodeJS</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />ExpressJS</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />MongoDB</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='title text1'>Others</p>
                                        <ul>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />Git</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />Postman</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />Figma</li>
                                            <li><FontAwesomeIcon className='arr' icon="fa-solid fa-caret-right" />Adobe Photoshop and Illustrator</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col3">
                        <motion.div className="content"
                            whileInView={enter}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation2}
                            transition={{ type: 'spring', duration: 1.5, bounce: .3 }}>
                            <div className="image">
                                <img src={require('../img/id.jpg')} alt="" />
                                <div className="box"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}
