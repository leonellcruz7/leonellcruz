import React from 'react'
import './Landing.css'
import { motion } from 'framer-motion'

export default function Landing() {
    function viewresume() {
        window.open(
            'https://drive.google.com/file/d/1sELh7ASCMSqe2h7eLVaciS-fiXKUuXRU/view?usp=sharing',
            '_blank'
        )
    }

    return (
        <div className="landing">
            <div className="mdCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <motion.p className='hi'
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: 1, delay: .7 }}>Hi, my name is</motion.p>
                            <div className="head">
                                <motion.h1 className='name'
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 1, delay: .8 }}>Leonell Cruz.</motion.h1>
                                <motion.h1 className='sub'
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 1, delay: .9 }}>full stack web developer</motion.h1>
                            </div>
                            <div className="text">
                                <motion.p
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 1, delay: 1 }}>I am a Web Developer & Designer based in the Philippines experienced in building mobile responsive websites mainly focused on using HTML5, CSS3, Bootstrap, ReactJS, NodeJS, Express and other JavaScript Frameworks. </motion.p>
                            </div>
                            <div className="btn">
                                <motion.button
                                    onClick={viewresume}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 1, delay: 1.1 }}>Learn More</motion.button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
