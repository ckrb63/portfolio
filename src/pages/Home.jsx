import React, { useEffect, useState } from "react";
import "./Home.scss";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { backTransition, forwardTransition } from "./pageTransition";
import { useDispatch } from "react-redux";
import Profile from "../common/img/제목 없음-1.jpg";
import Forward from "../common/img/forward.svg";
import SideBar from "../common/components/SideBar/SideBar";

function Home() {
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
      forwardTransition(navigate, dispatch, "/introduce");
      // setTimeout(() => {
      //   forwardTransition(navigate, dispatch, "/introduce");
      // }, 100);
    }
  }, [direction]);

  return (
    <div className="home-container">
      <div className="home">
        <SideBar />
        <div className="home-info">
          <h4>+82 10-5023-9161</h4>
          <h4>cksr1@naver.com</h4>
          <h4>Gwangjingu, Seoul</h4>
        </div>
        <div className="home-introduce">
          <img className="home-introduce-img" src={Profile} alt="profile" />
          <div className="home-introduce-text">
            <h1>{`안녕하세요 !\n저는 REACT 개발자\n김찬규입니다`}</h1>
            <div className="home-introduce-link">
              <a
                href="https://github.com/ckrb63"
                rel="noreferrer noopener"
                target={"_blank"}>
                GitHub
                <img src={Forward} alt="link" />
              </a>
              <a
                href="https://github.com/ckrb63"
                rel="noreferrer noopener"
                target={"_blank"}>
                Velog
                <img src={Forward} alt="link" />
              </a>
            </div>
          </div>
        </div>
        {/* <h1
          onClick={() => {
            forwardTransition(navigate, dispatch, "/introduce");
          }}>
          Home
        </h1>
        <h1
          onClick={() => {
            backTransition(navigate, dispatch, "/introduce");
          }}>
          Home
        </h1> */}
      </div>
    </div>
  );
}

export default Home;
