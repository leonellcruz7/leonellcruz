import "./App.css";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Work from "./Components/Work";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Things from "./Components/Things";
import Contact from "./Components/Contact";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

library.add(faCaretRight);

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const work = useRef(null);
  const things = useRef(null);
  const contact = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState("close");

  function open(e) {
    e.preventDefault();
    setToggle(!toggle);
    setStatus("open");
  }

  function close(e) {
    e.preventDefault();

    setToggle(!toggle);
    setStatus("close");
  }

  const menuVariant = {
    open: {
      x: 15,
    },
    close: {
      x: 530,
    },
  };

  const [dotEffect, setDotEffect] = useState("");

  const dotVariant = {
    home: {
      x: 24,
      opacity: 1,
    },
    about: {
      x: 140,
      opacity: 1,
    },
    work: {
      x: 253,
      opacity: 1,
    },
    things: {
      x: 370,
      opacity: 1,
    },
    contact: {
      x: 497,
      opacity: 1,
    },
  };

  function scroll(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }

  function viewresume() {
    window.open(
      "https://drive.google.com/file/d/1FPYMUwUgb0v2jJD9tOzRpaPRwCsoDZgW/view?usp=share_link",
      "_blank"
    );
  }

  const [namePosition, setNamePosition] = useState("hide");
  const nameVar = {
    show: {
      x: 0,
    },
    hide: {
      x: -230,
    },
  };
  const showName = (e) => {
    e.preventDefault();
    if (namePosition == "hide") {
      setNamePosition("show");
    } else {
      setNamePosition("hide");
    }
  };

  const fb = () => {
    window.open("https://www.facebook.com/leonell.b.cruz/", "_blank");
  };

  const ig = () => {
    window.open("https://www.instagram.com/leonell.b.cruz/", "_blank");
  };
  const li = () => {
    window.open("https://www.linkedin.com/in/leonellcruz/", "_blank");
  };
  const gh = () => {
    window.open("https://github.com/leonellcruz7", "_blank");
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="mdCon">
          <div className="row">
            <motion.div
              className="col6 logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={require("./img/leologo.png")}
                onMouseEnter={showName}
                onMouseLeave={showName}
              />
              <div className="hiddenname">
                <motion.img
                  src={require("./img/dog.png")}
                  initial={{ x: -230, rotate: 90 }}
                  variants={nameVar}
                  animate={namePosition}
                  transition={{ type: "spring", duration: 0.2, bounce: 0.1 }}
                />
              </div>
            </motion.div>
            <div className="col6 desktoplist list">
              <ul>
                <motion.div
                  className="dot"
                  variants={dotVariant}
                  animate={dotEffect}
                  initial={{ x: 24, opacity: 0 }}
                ></motion.div>
                <motion.li
                  onMouseEnter={() => setDotEffect("home")}
                  onClick={() => scroll(home)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                >
                  <span className="num">01.</span>home
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("about")}
                  onClick={() => scroll(about)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                >
                  <span className="num">02.</span>about
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("work")}
                  onClick={() => scroll(work)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.1 }}
                >
                  <span className="num">03.</span>work
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("things")}
                  onClick={() => scroll(things)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
                >
                  <span className="num">04.</span>things
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("contact")}
                  onClick={() => scroll(contact)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.3 }}
                >
                  <span className="num">05.</span>contact
                </motion.li>
                <motion.div
                  className="btn"
                  onClick={viewresume}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.4 }}
                >
                  <button>Resume</button>
                </motion.div>
              </ul>
              <div className="socials">
                <FiFacebook
                  onClick={fb}
                  className="icon"
                />
                <FiInstagram
                  onClick={ig}
                  className="icon"
                />
                <FiLinkedin
                  onClick={li}
                  className="icon"
                />
                <FiGithub
                  onClick={gh}
                  className="icon"
                />
                <div className="divider"></div>
              </div>
            </div>
            <motion.div
              className="col6 mobilelist list"
              initial={{ x: 530 }}
              variants={menuVariant}
              animate={status}
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
            >
              <ul>
                <motion.li
                  onMouseEnter={() => setDotEffect("home")}
                  onTap={close}
                  onClick={() => scroll(home)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                >
                  <span className="num">01.</span>home
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("about")}
                  onTap={close}
                  onClick={() => scroll(about)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                >
                  <span className="num">02.</span>about
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("work")}
                  onTap={close}
                  onClick={() => scroll(work)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.1 }}
                >
                  <span className="num">03.</span>work
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("things")}
                  onTap={close}
                  onClick={() => scroll(things)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
                >
                  <span className="num">04.</span>things
                </motion.li>
                <motion.li
                  onMouseEnter={() => setDotEffect("contact")}
                  onTap={close}
                  onClick={() => scroll(contact)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.7, delay: 0.3 }}
                >
                  <span className="num">05.</span>contact
                </motion.li>
                <li>
                  <div className="btn">
                    <motion.button
                      onClick={viewresume}
                      onTap={close}
                      whileHover={{ brightness: 2 }}
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.7, delay: 0.4 }}
                    >
                      Resume
                    </motion.button>
                  </div>
                </li>
              </ul>
            </motion.div>
            <div className="menu">
              {toggle ? (
                <GrFormClose
                  className="close"
                  onClick={close}
                />
              ) : (
                <RiMenu5Fill
                  className="open"
                  onClick={open}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div ref={home}>
        <Landing />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={work}>
        <Work />
      </div>
      <div ref={things}>
        <Things />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
