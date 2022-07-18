import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
    return (
        <div className="contact">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <h4>Contact</h4>
                            <h2>Need Something?</h2>
                            <p className='text'>Use the form to send me your request or you can email me directly at the email address provided below.</p>
                            <div className='mail'>
                                <HiOutlineMail className='maillogo' />
                                <p className='email'>leonellcruz111513@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <div className="input">

                                <p>Name</p>
                                <FaUser className='inputIcon nIcon' />
                                <input type="text" />
                            </div>
                            <div className="input">
                                <p>Email</p>
                                <MdEmail className='inputIcon eIcon' />
                                <input type="text" />
                            </div>
                            <div className="input">
                                <p>Message</p>
                                <textarea name="" id="" cols="30" rows='10'></textarea>
                            </div>
                            <div className="btn">
                                <button>Send</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
