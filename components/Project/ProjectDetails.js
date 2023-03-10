import parse from "html-react-parser";
import Image from "next/image";

import projectdetails from "../../styles/components/Project/ProjectDetails.module.scss";
import project from "../Project/ProjectDescription.js";

export default function ProjectDetails(props) {
  let temp = "";

  const renderProject = (props) => {
    switch (props.project) {
      case "portfolio":
        temp = project[1];
        break;
      case "frightflight":
        temp = project[0];
        break;
      case "tiktok-gif":
        temp = project[2];
        break;
    }
  };
  renderProject(props);
  return (
    <div className={projectdetails.project}>
      <div className={projectdetails.projectDetails}>
        <div className={projectdetails.projectInfo}>
          <h1>{temp.title}</h1>
          <div className={projectdetails.projectBadges}>
            {temp.badges.map(function (b) {
              return (
                <div className={projectdetails.projectBadge} key={b}>
                  <p>{b}</p>
                </div>
              );
            })}
          </div>
          <div className={projectdetails.projectButton}>
            {temp.website ? <a href={temp.website}>Website Link</a> : ""}
            {temp.github ? <a href={temp.github}>Github Link</a> : ""}
          </div>
          <div className={projectdetails.projectDescription}>
            <div>{parse(temp.description)}</div>
          </div>
        </div>
        <div className={projectdetails.projectImage}>
          {temp.images.map(function (i) {
            return (
              <Image
                src={i}
                width={1920}
                height={1080}
                key={i}
                alt={temp.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
