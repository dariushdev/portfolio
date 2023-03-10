import Articles from "../components/Article/Articles";
import CreateArticle from "../components/Article/CreateArticle";
import Pagination from "../components/Article/Pagination";
import prisma from "../lib/prisma";
import article from "../styles/components/Article.module.scss";

export default function ArticlesPage({ blogPosts, totalPages, page }) {
  return (
    <div className={article.articleWrapper}>
      <h1>Articles</h1>
      <p>
        This is where I share my writings on programming, tutorials, and my
        experiences.
      </p>
      <CreateArticle />
      <Articles posts={blogPosts} />
      <Pagination totalPages={totalPages} page={page} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const perPage = 4;
  const skip = (page - 1) * perPage;

  const blogPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
    skip,
    take: perPage,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalPosts = await prisma.post.count({
    where: {
      published: true,
    },
  });

  const totalPages = Math.ceil(totalPosts / perPage);

  return {
    props: {
      blogPosts,
      page,
      totalPages,
    },
  };
}
