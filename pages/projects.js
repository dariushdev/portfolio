import ProjectCard from "../components/Project/ProjectCard";
import projects from "../styles/components/Work.module.scss";

export default function ProjectPage() {
  return (
    <div className={projects.projects}>
      <div className={projects.projectRow}>
        <ProjectCard
          title="Portfolio"
          description="Personal website with blog"
          image="/portfolio.jpg"
          badge={["NextJS", "Prisma", "REST API"]}
          slug="portfolio"
        />
        <ProjectCard
          title="TikTok Gif"
          description="TikTok clip to gif convertor"
          image="/tiktok.jpg"
          badge={["PHP", "ffmpeg", "Twig"]}
          slug="tiktok-gif"
        />
      </div>
      <div className={projects.row}>
        <ProjectCard
          title="Fright Flight"
          description="Android game"
          image="/frightflight.jpg"
          badge={["Lua", "Solar2d"]}
          slug="fright flight"
        />
        <div className={projects.moreProjects}>
          <a href="https://github.com/dariushdev?tab=repositories">
            <p>More Projects</p>
            <p>On</p>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
