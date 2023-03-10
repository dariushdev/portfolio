import home from "../../styles/components/Home.module.scss";
import React from "react";

import { useState } from "react";

export default function Skills() {
  const [isHovering, setIsHovering] = useState("");

  const handleMouseOver = (e) => {
    setIsHovering(e.target.id);
  };

  const handleMouseOut = () => {
    setIsHovering("");
  };
  return (
    <div className={home.skills}>
      <ul>
        <li>
          <i
            className={
              isHovering == "html5"
                ? "devicon-html5-plain-wordmark colored"
                : "devicon-html5-plain-wordmark "
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="html5"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "css3"
                ? "devicon-css3-plain-wordmark colored"
                : "devicon-css3-plain-wordmark"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="css3"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "javascript"
                ? "devicon-javascript-plain colored"
                : "devicon-javascript-plain"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="javascript"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "laravel"
                ? "devicon-laravel-plain-wordmark colored"
                : "devicon-laravel-plain-wordmark"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="laravel"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "symfony"
                ? "devicon-symfony-original-wordmark colored"
                : "devicon-symfony-original-wordmark"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="symfony"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "nodejs"
                ? "devicon-nodejs-plain colored"
                : "devicon-nodejs-plain"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="nodejs"
          ></i>
        </li>
        <li>
          <i
            className={
              isHovering == "git"
                ? "devicon-git-plain colored"
                : "devicon-git-plain"
            }
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}
            id="git"
          ></i>
        </li>
      </ul>
    </div>
  );
}
