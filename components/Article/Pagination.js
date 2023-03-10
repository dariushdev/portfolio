import { range } from "lodash";
import Link from "next/link";

import article from "../../styles/components/Article.module.scss";

export default function Pagination({ totalPages, page }) {
  const pageNumbers = range(1, totalPages + 1);
  return (
    <div className={article.pagination}>
      {totalPages > 1 && (
        <div className={article.pagination}>
          {pageNumbers.map((pageNumber) => (
            <Link href={`/articles?page=${pageNumber}`} key={pageNumber}>
              <a
                className={`${article.pageNumber} ${
                  pageNumber === page ? article.activePage : ""
                }`}
              >
                {pageNumber}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
