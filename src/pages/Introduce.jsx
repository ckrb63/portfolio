import React, { useEffect, useState } from "react";
import "./Introduce.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backTransition, forwardTransition } from "./pageTransition";

function Introduce() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [direction, setDirection] = useState("");
  const scrollEvent = (e) => {
    e.deltaY > 0 ? setDirection("down") : setDirection("up");
  };
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("mousewheel", scrollEvent);
    }, 1000);
    return () => {
      window.removeEventListener("mousewheel", scrollEvent);
    };
  }, []);

  useEffect(() => {
    if (direction === "down") {
      window.removeEventListener("mousewheel", scrollEvent);
      forwardTransition(navigate, dispatch, "/service");
    } else if (direction === "up") {
      window.removeEventListener("mousewheel", scrollEvent);
      backTransition(navigate, dispatch, "/");
    }
  }, [direction]);

  return (
    <div className="introduce-container">
      <div className="introduce">introduce</div>
    </div>
  );
}

export default Introduce;
