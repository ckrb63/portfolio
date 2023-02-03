import React from "react";
import classNames from "classnames";
import "./Project.scss";

function Project(props) {
  const { isMobile, img1, img2, title } = props;

  return (
    <div className="project">
      <div className={classNames("project-img", { isMobile })}>
        <img src={img1} alt="img1" className="project-img-1" />
        <img src={img2} alt="img2" className="project-img-2" />
      </div>
      <div className="project-content">
        <h3></h3>
      </div>
    </div>
  );
}

export default Project;
