import { unstable_getServerSession } from "next-auth/next";

import prisma from "../../../../lib/prisma";
import { authOptions } from "../../auth/[...nextauth]";

export default async function editApi(req, res) {
  const postId = req.query.id;
  const session = await unstable_getServerSession(req, res, authOptions);

  const { title, slug, content, checked } = req.body;

  if (!title || !slug || !content) {
    res.status(400).json({ message: "Please fill all required fields." });
    return;
  }

  if (session) {
    if (req.method === "PUT") {
      const post = await prisma.post.update({
        where: { id: postId },
        data: {
          title: title,
          content: content,
          published: checked,
          slug: slug,
        },
      });
      res.json({ message: "Post successfully modified." });
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
    }
  } else {
    res.status(401);
  }
  res.end();
}
