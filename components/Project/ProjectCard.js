import Image from "next/image";
import Link from "next/link";

import projectcard from "../../styles/components/Work.module.scss";

export default function ProjectCard(props) {
  const badges = props.badge;
  return (
    <div className={projectcard.project}>
      <div className={projectcard.projectText}>
        <p>{props.title}</p>
        <div className={projectcard.projectBadges}>
          {badges
            ? badges.map((b) => {
                return (
                  <div className={projectcard.projectBadge} key={b}>
                    <p>{b}</p>
                  </div>
                );
              })
            : ""}
        </div>
        <p>{props.description}</p>
        <div className={projectcard.projectButtons}>
          <Link href={"/projects/" + props.slug}>
            <button>View</button>
          </Link>
        </div>
      </div>
      <div className={projectcard.projectImage}>
        <Image
          src={props.image}
          width={1920 / 2}
          height={1080 / 2}
          priority="1"
          alt={props.title}
          as="image"
        />
      </div>
    </div>
  );
}
