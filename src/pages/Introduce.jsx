import React, { useEffect, useState } from "react";
import "./Introduce.scss";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backTransition, forwardTransition } from "./pageTransition";
import SideBar from "../common/components/SideBar/SideBar";

function Introduce() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [direction, setDirection] = useState("");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(1155);

  useEffect(() => {
    if (count1 === 0) {
      setTimeout(() => {
        setCount1(count1 + 1);
      }, 700);
    } else if (count1 < 2) {
      setTimeout(() => {
        setCount1(count1 + 1);
      }, 300);
    }
  }, [count1]);

  useEffect(() => {
    if (count2 === 0) {
      setTimeout(() => {
        setCount2(count2 + 1);
      }, 700);
    } else if (count2 < 5) {
      setTimeout(() => {
        setCount2(count2 + 1);
      }, 300);
    }
  }, [count2]);

  useEffect(() => {
    if (count3 === 1155) {
      setTimeout(() => {
        setCount3(count3 + 1);
      }, 700);
    } else if (count3 < 1160) {
      setTimeout(() => {
        setCount3(count3 + 1);
      }, 600);
    }
  }, [count3]);

  console.log(count1, count2);

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
      <div className="introduce">
        <SideBar />
        <div className="introduce-contents">
          <div className="introduce-text">
            <h1>{`저는 서비스 구현에 대해 관심이 많으며\n새로운 도전과 학습, 프로젝트를 즐깁니다.`}</h1>
            <div className="introduce-text-wrapper">
              <h6>React</h6>
              <h6>JavaScript</h6>
              <h6>TypeScript</h6>
              <h6>Redux</h6>
              <h6>React-Query</h6>
              <h6>SASS</h6>
              <h6>Three.js</h6>
            </div>
          </div>
          <div className="introduce-project">
            <div className="introduce-project-box">
              <h3>{count1}</h3>
              <span>창업 프로젝트</span>
            </div>
            <div className="introduce-project-box">
              <h3>{count2}</h3>
              <span>팀 프로젝트</span>
            </div>
          </div>
          <div className="introduce-contribute">
            <h3>{count3}</h3>
            <span>contributions in the last year</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
