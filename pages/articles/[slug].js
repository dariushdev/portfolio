import { format } from "date-fns";
import enGB from "date-fns/locale/en-GB/index";
import parse from "html-react-parser";
import Link from "next/link";
import { useEffect, useState } from "react";

import prisma from "../../lib/prisma";
import articleslug from "../../styles/components/Article.module.scss";

export default function ArticlesSlugPage({ article }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {article ? (
        <div className={articleslug.articleContent}>
          <h1>{article.title}</h1>
          <p className={articleslug.postinfo}>
            By {article.author.name} &#x2022; Published on{" "}
            {format(article.createdAt, "EEE MMM dd yyyy", {
              locale: enGB,
            })}
          </p>
          {parse(article.content)}
          <hr />
          <Link href="/articles">Back to articles</Link>
          {showScrollButton && (
            <button onClick={handleScrollToTop}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const article = await prisma.post.findFirst({
    where: {
      slug: context.params.slug,
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    props: { article },
  };
}
export async function getStaticPaths() {
  const posts = await prisma.post.findMany();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
