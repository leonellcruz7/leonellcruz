import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import secuna from "../img/secuna-logo.svg";
import "./Things.css";

export default function Things() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const animation = useAnimation();
  const content = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();

  const content2 = useAnimation();
  const content3 = useAnimation();
  const content4 = useAnimation();

  const one = useAnimation();
  const two = useAnimation();
  const three = useAnimation();
  const four = useAnimation();

  function first() {
    one.start({
      y: 0,
      opacity: 1,
    });
  }

  function second() {
    two.start({
      y: 0,
      opacity: 1,
    });
  }
  function third() {
    three.start({
      y: 0,
      opacity: 1,
    });
  }

  function fourth() {
    four.start({
      y: 0,
      opacity: 1,
    });
  }

  useEffect(() => {
    if (hover) {
      animation.start({
        scale: 1.2,
        x: 80,
        y: 40,
        zIndex: 1,
      });
      content.start({
        y: -110,
      });
    } else {
      animation.start({
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 0,
      });
      content.start({
        y: 0,
      });
    }
  }, [hover]);

  useEffect(() => {
    if (hover2) {
      animation2.start({
        scale: 1.2,
        x: -80,
        y: 40,
        zIndex: 1,
      });
      content2.start({
        y: -100,
      });
    } else {
      animation2.start({
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 0,
      });
      content2.start({
        y: 0,
      });
    }
  }, [hover2]);
  useEffect(() => {
    if (hover3) {
      animation3.start({
        scale: 1.2,
        x: -80,
        y: 40,
        zIndex: 1,
      });
      content3.start({
        y: -80,
      });
    } else {
      animation3.start({
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 0,
      });
      content3.start({
        y: 0,
      });
    }
  }, [hover3]);
  useEffect(() => {
    if (hover4) {
      animation4.start({
        scale: 1.2,
        x: -80,
        y: 40,
        zIndex: 1,
      });
      content4.start({
        y: -80,
      });
    } else {
      animation4.start({
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 0,
      });
      content4.start({
        y: 0,
      });
    }
  }, [hover4]);

  function redirect() {
    window.open("https://capstone-3-ecommerce-website.vercel.app/", "_blank");
  }

  function redirect2() {
    window.open("https://zuitt-clone-website.vercel.app/", "_blank");
  }
  function redirect3() {
    window.open("https://www.secuna.io/", "_blank");
  }
  function redirect4() {
    window.open("https://ecommerce-demo-leonell.netlify.app", "_blank");
  }

  function redirectTodo() {
    window.open("https://todo-app-three-tau.vercel.app/", "_blank");
  }

  function redirectCalcu() {
    window.open("https://leonell-calculator.netlify.app/", "_blank");
  }

  return (
    <div className="things">
      <div className="mdCon">
        <motion.div
          className="row"
          whileInView={first}
          initial={{ y: 100, opacity: 0 }}
          animate={one}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <div className="col1">
            <div className="content">
              <div className="head">
                <p className="numsection">03.</p>
                <h2>My Works</h2>
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="row project"
          whileInView={second}
          initial={{ y: 100, opacity: 0 }}
          animate={two}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <motion.div
            className="col2 image"
            onClick={redirect}
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            animate={animation}
            initial={{ scale: 1, x: 0, y: 0, zIndex: 0 }}
            transition={{ duration: 0.3, bounce: 0.3 }}
          >
            <div className="content flex flex-col items-center">
              <motion.img
                className="logo"
                src={require("../img/logo.png")}
                animate={content}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
              <motion.p
                animate={content}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              >
                Fullstack Ecommerce Website
              </motion.p>
              <motion.img
                src={require("../img/mock.png")}
                alt=""
                animate={content}
                initial={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
            </div>
          </motion.div>
          <div className="col2 information">
            <div className="content">
              <p>Featured Project</p>
              <h3>Ecommerce Website</h3>
              <div className="box">
                <p>
                  This is a capstone project I made during my botcamp with Zuitt
                  wherin I used ReactJS for the frontend, NodeJS and Express JS
                  for backend and MongoDB as the database.
                </p>
              </div>
              <ul className="tools">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Postman</li>
              </ul>
              <ul className="tools">
                <li>Vs Code</li>
                <li>Framer-Motion</li>
              </ul>
              <div className="mobiletools">
                <ul className="mtools">
                  <li>Vs Code</li>
                  <li>Framer-Motion</li>
                  <li>Postman</li>
                </ul>
                <ul className="mtools">
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="row secondrow project"
          whileInView={third}
          initial={{ y: 100, opacity: 0 }}
          animate={three}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <div className="col2 information2">
            <div className="content">
              <p>Featured Project</p>
              <h3>Zuitt Clone Website</h3>
              <div className="box2">
                <p>
                  Functional Website wherein you can choose and book a web
                  development course that you prefer to learn. Also built using
                  ReactJS and other Javascript Tools and Frameworks.
                </p>
              </div>
              <ul className="tools2">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Postman</li>
              </ul>
              <div className="mobiletools">
                <ul className="mtools2">
                  <li>MongoDB</li>
                  <li>Postman</li>
                </ul>
                <ul className="mtools2">
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            className="col2 image2"
            onClick={redirect2}
            onMouseEnter={(e) => setHover2(true)}
            onMouseLeave={(e) => setHover2(false)}
            animate={animation2}
            initial={{ scale: 1, x: 0, y: 0, zIndex: 0 }}
            transition={{ duration: 0.3, bounce: 0.3 }}
          >
            <div className="content flex flex-col items-center">
              <motion.img
                className="zuitt"
                src={require("../img/zuittlogo.png")}
                animate={content2}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
              <motion.p
                animate={content2}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              >
                Course Booking Website
              </motion.p>
              <motion.img
                src={require("../img/zuitt.png")}
                alt=""
                animate={content2}
                initial={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="row project"
          whileInView={fourth}
          initial={{ y: 100, opacity: 0 }}
          animate={four}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <motion.div
            className="col2 image"
            onClick={redirect3}
            onMouseEnter={(e) => setHover3(true)}
            onMouseLeave={(e) => setHover3(false)}
            animate={animation3}
            initial={{ scale: 1, x: 0, y: 0, zIndex: 0 }}
            transition={{ duration: 0.3, bounce: 0.3 }}
          >
            <div className="content flex flex-col items-center">
              <motion.img
                className="logo"
                src={secuna}
                animate={content3}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
              <motion.p
                animate={content3}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              >
                Cyber Security Platform
              </motion.p>
              <motion.img
                src={require("../img/secuna.png")}
                alt=""
                animate={content3}
                initial={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
            </div>
          </motion.div>
          <div className="col2 information">
            <div className="content">
              <p>Featured Project</p>
              <h3>Cyber Security Platform</h3>
              <div className="box">
                <p>
                  Cyber Security platform which I build during my working period
                  at Secuna. This application connects companies and
                  organizations to cybersecurity professionals for them to be
                  able to simulate cyber-attacks and find security flaws.
                </p>
              </div>
              <ul className="tools">
                <li>ReactJS</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>AWS</li>
                <li>Tailwind</li>
                <li>SASS</li>
              </ul>
              <ul className="tools">
                <li>Redux Toolkit</li>
                <li>Framer-Motion</li>
                <li>Axios</li>
              </ul>
              <div className="mobiletools">
                <ul className="mtools">
                  <li>Redux Toolkit</li>
                  <li>Framer-Motion</li>
                  <li>Axios</li>
                </ul>
                <ul className="mtools">
                  <li>ReactJS</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>AWS</li>
                  <li>Tailwind</li>
                  <li>SASS</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="row secondrow project"
          whileInView={third}
          initial={{ y: 100, opacity: 0 }}
          animate={three}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <div className="col2 information2">
            <div className="content">
              <p>Featured Project</p>
              <h3>Ecommerce Amazon Affiliate</h3>
              <div className="box2">
                <p>
                  Ecommerce website which I will be using in selling affiliate
                  products from amazon. I am building this using Next Js and
                  Node JS which will be deployed in AWS using EC2 Instance.
                </p>
              </div>
              <ul className="tools2">
                <li>NextJs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Postman</li>
              </ul>{" "}
              <ul className="tools2">
                <li>AWS</li>
              </ul>
              <div className="mobiletools">
                <ul className="mtools2">
                  <li>MongoDB</li>
                  <li>Postman</li>
                </ul>
                <ul className="mtools2">
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            className="col2 image2"
            onClick={redirect4}
            onMouseEnter={(e) => setHover4(true)}
            onMouseLeave={(e) => setHover4(false)}
            animate={animation4}
            initial={{ scale: 1, x: 0, y: 0, zIndex: 0 }}
            transition={{ duration: 0.3, bounce: 0.3 }}
          >
            <div className="content flex flex-col items-center">
              <motion.img
                className="ecom-demo"
                src={require("../img/logo-1.png")}
                animate={content4}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
              <motion.p
                animate={content4}
                initial={{ y: 0 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              >
                Ecommerce Amazon Affiliate Website
              </motion.p>
              <motion.img
                src={require("../img/ecom-demo.png")}
                alt=""
                animate={content4}
                initial={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.3, bounce: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="row other">
          <div className="col1">
            <div className="content">
              <div className="othertitle">
                <h2>Other Projects</h2>
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row othercontent">
          <div className="col4">
            <div className="content">
              <div className="card" onClick={redirectTodo}>
                <div className="imgcon">
                  <img src={require("../img/todo.jpg")} className="otherimg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col4">
            <div className="content">
              <div className="card" onClick={redirectCalcu}>
                <div className="imgcon">
                  <img src={require("../img/calcu.jpg")} className="otherimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
