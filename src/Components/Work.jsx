import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import "./Work.css";

export default function Work() {
  const [num, setNum] = useState("");
  const animation = useAnimation();

  function enter() {
    animation.start({
      y: 0,
      opacity: 1,
    });
  }

  function one(e) {
    e.preventDefault();
    setNum("one");
  }
  function two(e) {
    e.preventDefault();
    setNum("two");
  }
  function three(e) {
    e.preventDefault();
    setNum("three");
  }
  function four(e) {
    e.preventDefault();
    setNum("four");
  }

  const scrollVariant = {
    one: {
      y: 0,
    },
    two: {
      y: 34,
    },
    three: {
      y: 70,
    },
    four: {
      y: 104,
    },
  };

  const workVariant = {
    one: {
      y: 0,
    },
    two: {
      y: -310,
    },
    three: {
      y: -660,
    },
    four: {
      y: -990,
    },
  };

  const widthVariant = {
    one: {
      x: -65,
    },
    two: {
      x: 0,
    },
    three: {
      x: -14,
    },
    four: {
      x: -30,
    },
  };

  return (
    <motion.div
      className="work"
      whileInView={enter}
      initial={{ y: 100, opacity: 0 }}
      animate={animation}
      transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
    >
      <div className="smCon">
        <div className="row">
          <div className="col1">
            <div className="content">
              <div className="head">
                <p className="num1">02.</p>
                <h2>Background</h2>
                <div className="divider"></div>
              </div>
              <div className="info">
                <div className="category">
                  <div className="scroll">
                    <motion.div
                      className="select"
                      initial={{ y: 0, x: -2 }}
                      variants={scrollVariant}
                      animate={num}
                      transition={{
                        type: "spring",
                        duration: 0.4,
                        bounce: 0.3,
                        delay: 0.2,
                      }}
                    >
                      <div className="one"></div>
                      <div className="sidecon">
                        <motion.div
                          className="side"
                          initial={{ x: -65 }}
                          variants={widthVariant}
                          animate={num}
                          transition={{
                            type: "spring",
                            duration: 0.4,
                            bounce: 0.2,
                          }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <ul>
                    <li onClick={one}>Teacher</li>
                    <li
                      onClick={two}
                      className="two"
                    >
                      Graphic Designer
                    </li>
                    <li
                      onClick={three}
                      className="three"
                    >
                      Bootcamper
                    </li>
                    <li
                      onClick={four}
                      className="three"
                    >
                      Front End Dev
                    </li>
                  </ul>
                </div>
                <div className="textcon">
                  <motion.div
                    className="text"
                    initial={{ y: 0 }}
                    variants={workVariant}
                    animate={num}
                    transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
                  >
                    <div className="worklist w1">
                      <h3>
                        Special Education Teacher @ Tots @ Work DCFYL, Inc.
                      </h3>
                      <p>June 2016 - March 2021</p>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p className="puita">
                            Create Individualized Program suitable for the
                            specific needs of a particular child.
                          </p>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            Collaborate with other teachers, therapists and
                            parents on how to implement the designed program.
                          </p>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            Create activities and visual aids to be used for
                            daily lesson.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="worklist w2">
                      <h3>Graphic Designer at iDigital Media</h3>
                      <p>January - December 2021</p>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            Produce visual concepts that will inform and
                            captivate consumers, based on client requirements
                          </p>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            Create graphical content or logos for socialmedia,
                            website, print ads, etc. using Adobe photoshop or
                            Illustrator
                          </p>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            Amend designs after feedback and ensure that final
                            graphics and layouts are visually appealing and
                            on-brand
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="worklist w3">
                      <h3>Web Dev Bootcamper at Zuitt</h3>
                      <p>April 2022</p>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            During this period I experienced building full stack
                            websites. I was able to accomplish an Ecommerce
                            Website and Coursebooking Website as a requirement
                            for completion of the bootcamp, using different
                            tools and frameworks such as ReactJS and NodeJS.{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="worklist w3 pt-20">
                      <h3>Frontend Web Developer at Secuna</h3>
                      <p>August 2022</p>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            In this company, I built, alongside with 2 of my co
                            developers, a cybersecurity platform application
                            from scratch. We were able to launch this platform
                            within 7 months. The stack we used for this project
                            are ReactJs, Laravel, PHP, Tailwind, Sass and other
                            libraries.
                          </p>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            className="arr"
                            icon="fa-solid fa-caret-right"
                          />
                          <p>
                            I started working as a junior developer at this
                            company and got promoted to mid developer after 7
                            months.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
