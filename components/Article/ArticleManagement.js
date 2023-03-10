import { useSession } from "next-auth/react";
import { useState } from "react";

import { submitHandler } from "../Admin/Submit";

export default function ArticleManagement({ article }) {
  const { status } = useSession();
  const [post, setPost] = useState("");

  if (status === "authenticated" && post != article.id) {
    return (
      <div className="textCenter">
        <a href={"/admin/edit/" + article.id}>
          <i className="fa-solid fa-pen-to-square m-5"></i>
        </a>
        <i
          className="fa-solid fa-xmark m-5"
          onClick={() => setPost(article.id)}
        ></i>
      </div>
    );
  }

  if (post === article.id && status === "authenticated") {
    return (
      <div className="textCenter">
        <p>
          Are you sure?
          <i
            className="fa-regular fa-thumbs-up m-5"
            onClick={(e) => {
              e.preventDefault();
              const response = submitHandler(article.id, "DELETE");
              if (response) {
                window.location.reload();
              }
            }}
          ></i>
          <i
            className="fa-regular fa-thumbs-down m-5"
            onClick={() => setPost("")}
          ></i>
        </p>
      </div>
    );
  }
}
