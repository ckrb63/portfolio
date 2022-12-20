import React, { useEffect, useState } from "react";

import "./Stack.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backTransition, forwardTransition } from "./pageTransition";

function Stack() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [direction, setDirection] = useState("");
  const scrollEvent = (e) => {
    e.deltaY > 0 ? setDirection("down") : setDirection("up");
  };
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("mousewheel", scrollEvent);
    }, 500);
    return () => {
      // window.removeEventListener("mousewheel", scrollEvent);
    };
  }, []);

  useEffect(() => {
    if (direction === "down") {
      // window.removeEventListener("mousewheel", scrollEvent);
      forwardTransition(navigate, dispatch, "/stack");
    } else if (direction === "up") {
      window.removeEventListener("mousewheel", scrollEvent);
      backTransition(navigate, dispatch, "/introduce");
    }
  }, [direction]);
  return (
    <div className="stack-container">
      <div className="stack">
        <h1
          onClick={() => {
            navigate("/");
          }}>
          stack
        </h1>
      </div>
    </div>
  );
}

export default Stack;
