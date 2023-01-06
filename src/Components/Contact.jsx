import React, { useState } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [btnLabel, setBtnLabel] = useState("Submit");

  const send = async () => {
    setBtnLabel(
      <>
        <AiOutlineLoading3Quarters className="animate-spin" />
      </>
    );
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
      setBtnLabel("Submit");
    } else {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/leonellcruz7/google_sheets/ipkusytXGvUNpisx?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify([
              [
                nameRef.current.value,
                emailRef.current.value,
                messageRef.current.value,
              ],
            ]),
          }
        );
        console.log(response);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setBtnLabel("Submit");
      } catch (err) {
        console.log(err);
        setBtnLabel("Submit");
      }

      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Thank You for Reaching Out",
      });
    }
  };
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
              <div className="w-[140px] flex justify-center">
                <button
                  className="w-full flex justify-center"
                  onClick={send}
                >
                  {btnLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
