import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectDetails from "../../components/Project/ProjectDetails";

export default function ProjectSlugPage() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    setQuery(query);
  }, [router.isReady, router.query]);

  const renderCurrentProject = () => {
    switch (query.slug) {
      case "":
        return <ProjectDetails />;
      case "portfolio":
        return <ProjectDetails project="portfolio" />;
      case "fright flight":
        return <ProjectDetails project="frightflight" />;
      case "tiktok-gif":
        return <ProjectDetails project="tiktok-gif" />;
    }
  };
  return <div>{renderCurrentProject()}</div>;
}
