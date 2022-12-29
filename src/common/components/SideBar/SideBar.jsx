import React, { useState } from "react";
import "./SideBar.scss";
import SideBarButton from "../../img/sidebarbutton.svg";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forwardTransition } from "../../../pages/pageTransition";

const Path = (props) => (
  <motion.path
    fill="white"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function SideBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openSideBar = () => {
    setIsOpen(true);
  };

  const navigateButton = (path) => {
    forwardTransition(navigate, dispatch, path);
  };

  return (
    <div className="sidebar">
      {/* {!isOpen && (
        <div className="sidebar-button" onClick={openSideBar}>
          <img src={SideBarButton} alt="sidebar" />
        </div>
      )}
      {isOpen && <motion.div className="sidebar-open" animate={isOpen} />} */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="sidebar">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="sidebar-button">
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" }
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" }
              }}
            />
          </svg>
        </motion.button>
      </motion.div>
      <motion.div
        className="sidebar-open"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: {
              // type: "spring",
              // bounce: 0.2,
              duration: 0.5
            }
          },
          closed: {
            opacity: 0,
            y: -200,
            transition: {
              // type: "spring",
              // bounce: 0.2,
              duration: 0.5
            }
          }
        }}>
        <div
          className="sidebar-item"
          onClick={() => {
            navigateButton("/");
          }}>
          Home
        </div>
        <div
          className="sidebar-item"
          onClick={() => {
            navigateButton("/introduce");
          }}>
          Introduce
        </div>
        <div
          className="sidebar-item"
          onClick={() => {
            navigateButton("/service");
          }}>
          Portfolio
        </div>
        <div
          className="sidebar-item"
          onClick={() => {
            navigateButton("/stack");
          }}>
          Experience
        </div>
        <div
          className="sidebar-item"
          onClick={() => {
            navigateButton();
          }}>
          Blog
        </div>
      </motion.div>
    </div>
  );
}

export default SideBar;
