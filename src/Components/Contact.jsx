import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function send() {
    if (
      nameRef.current.value == "" ||
      emailRef.current.value == "" ||
      messageRef.current.value == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Message not Sent!",
        text: "Please fill out all the field",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Thank You for Reaching Out",
      });
    }
  }
  return (
    <div className="contact">
      <div className="smCon">
        <div className="row">
          <div className="col2">
            <div className="content">
              <h4>Contact Me</h4>
              <h2>Need Something?</h2>
              <p className="text">
                Use the form to send me your request or you can email me
                directly at the email address provided below.
              </p>
              <div className="mail">
                <HiOutlineMail className="maillogo" />
                <p className="email">leonellcruz111513@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="content">
              <div className="input">
                <p>Name</p>
                <FaUser className="inputIcon nIcon" />
                <input
                  ref={nameRef}
                  type="text"
                />
              </div>
              <div className="input">
                <p>Email</p>
                <MdEmail className="inputIcon eIcon" />
                <input
                  ref={emailRef}
                  type="text"
                />
              </div>
              <div className="input">
                <p>Message</p>
                <textarea
                  ref={messageRef}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="btn">
                <button onClick={send}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
