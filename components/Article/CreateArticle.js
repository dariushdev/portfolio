import { useSession } from "next-auth/react";
import Router from "next/router";

export default function CreateArticle() {
  const { status } = useSession();

  const createPost = (e) => {
    e.preventDefault();
    Router.push("/admin/create");
  };

  if (status === "authenticated") {
    return <i className="fa-solid fa-pencil m-5" onClick={createPost}></i>;
  }
}
