import React, { useEffect, useState } from "react";
import "./Service.scss";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backTransition, forwardTransition } from "../pageTransition";
import Project from "./Project";
import SideBar from "../../common/components/SideBar/SideBar";

function Service() {
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
      forwardTransition(navigate, dispatch, "/stack");
    } else if (direction === "up") {
      window.removeEventListener("mousewheel", scrollEvent);
      backTransition(navigate, dispatch, "/introduce");
    }
  }, [direction]);
  return (
    <div className="service-container">
      <SideBar />
      <div className="service">
        <div className="project">
          <div className="project-img">
            <img
              src="https://user-images.githubusercontent.com/54196723/198865030-1dd70c43-25a5-4e1e-a55a-4163ac45d654.png"
              alt="img1"
              className="project-img-1"
            />
            <img
              src="https://user-images.githubusercontent.com/54196723/198865278-252543e6-63b5-4c2f-97c1-89ef1c77c0a7.png"
              alt="img2"
              className="project-img-2"
            />
          </div>
          <div className="project-content">
            <h3>DELGO - travel</h3>
            <div className="project-content-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
            <div className="project-content-desc">
              반려동물과 함께 여행을 떠날 때 숙소를 예약할 수 있는 앱입니다.
            </div>
            <div className="project-content-date"> 2022.03 ~ 2022.07</div>
            <div className="project-content-developer">
              프론트엔드 2 백엔드 2 - 프론트엔드 담당
            </div>
            <div className="project-content-git">
              https://github.com/Team-Delgo/DelgoTravelClient
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img
              src="https://user-images.githubusercontent.com/54196723/209087443-ac6620df-d93d-44c0-bfd2-dd4f77573a2a.png"
              alt="img1"
              className="project-img-1"
            />
            <img
              src="https://user-images.githubusercontent.com/54196723/203541093-c7967f12-93e6-4462-82c2-cbcc94076126.png"
              alt="img2"
              className="project-img-2"
            />
          </div>
          <div className="project-content">
            <h3>DELGO - map</h3>
            <div className="project-content-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
            <div className="project-content-desc">
              반려동물과 함께 여행을 떠날 때 숙소를 예약할 수 있는 앱입니다.
            </div>
            <div className="project-content-date"> 2022.03 ~ 2022.07</div>
            <div className="project-content-developer">
              프론트엔드 2 백엔드 2 - 프론트엔드 담당
            </div>
            <div className="project-content-git">
              https://github.com/Team-Delgo/DelgoTravelClient
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img
              src="https://user-images.githubusercontent.com/54196723/198865030-1dd70c43-25a5-4e1e-a55a-4163ac45d654.png"
              alt="img1"
              className="project-img-1"
            />
            <img
              src="https://user-images.githubusercontent.com/54196723/198865278-252543e6-63b5-4c2f-97c1-89ef1c77c0a7.png"
              alt="img2"
              className="project-img-2"
            />
          </div>
          <div className="project-content">
            <h3>DELGO</h3>
            <div className="project-content-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
            <div className="project-content-desc">
              반려동물과 함께 여행을 떠날 때 숙소를 예약할 수 있는 앱입니다.
            </div>
            <div className="project-content-date"> 2022.03 ~ 2022.07</div>
            <div className="project-content-developer">
              프론트엔드 2 백엔드 2 - 프론트엔드 담당
            </div>
            <div className="project-content-git">
              https://github.com/Team-Delgo/DelgoTravelClient
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <img
              src="https://user-images.githubusercontent.com/54196723/198865030-1dd70c43-25a5-4e1e-a55a-4163ac45d654.png"
              alt="img1"
              className="project-img-1"
            />
            <img
              src="https://user-images.githubusercontent.com/54196723/198865278-252543e6-63b5-4c2f-97c1-89ef1c77c0a7.png"
              alt="img2"
              className="project-img-2"
            />
          </div>
          <div className="project-content">
            <h3>DELGO</h3>
            <div className="project-content-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
            <div className="project-content-desc">
              반려동물과 함께 여행을 떠날 때 숙소를 예약할 수 있는 앱입니다.
            </div>
            <div className="project-content-date"> 2022.03 ~ 2022.07</div>
            <div className="project-content-developer">
              프론트엔드 2 백엔드 2 - 프론트엔드 담당
            </div>
            <div className="project-content-git">
              https://github.com/Team-Delgo/DelgoTravelClient
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
