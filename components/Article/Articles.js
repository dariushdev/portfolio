import { format } from "date-fns";
import enGB from "date-fns/locale/en-GB/index";
import Router from "next/router";

import article from "../../styles/components/Article.module.scss";
import ArticleManagement from "./ArticleManagement";

export default function Articles({ posts, maxPosts }) {
  const hasMorePosts = posts.length > maxPosts;

  return (
    <div className={article.articles}>
      {posts.slice(0, maxPosts).map((post) => (
        <div className={article.article} key={post.title}>
          <h2>
            <a href={"/articles/" + post.slug}>{post.title}</a>
          </h2>
          <p>
            Published on{" "}
            {format(post.createdAt, "EEE MMM dd yyyy", {
              locale: enGB,
            })}
          </p>
          <ArticleManagement article={post} />
        </div>
      ))}
      {!posts || (posts.length === 0 && <p>No posts to display.</p>)}
      {hasMorePosts && (
        <button
          onClick={() => Router.push("/articles", undefined, { shallow: true })}
        >
          Read more
        </button>
      )}
    </div>
  );
}
