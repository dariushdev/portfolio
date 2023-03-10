import Articles from "../components/Article/Articles";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import prisma from "../lib/prisma";
import home from "../styles/components/Home.module.scss";

export default function HomePage({ blogPosts }) {
  return (
    <div className={home.main}>
      <About />
      <Skills />
      <h1>Latest Articles</h1>
      <Articles posts={blogPosts} maxPosts={2} />
    </div>
  );
}

export async function getServerSideProps() {
  const blogPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return {
    props: { blogPosts },
  };
}
