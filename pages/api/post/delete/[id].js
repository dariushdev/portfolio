import prisma from "../../../../lib/prisma";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

export default async function deleteApi(req, res) {
  const postId = req.query.id;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    if (req.method === "DELETE") {
      const post = await prisma.post.delete({
        where: { id: postId },
      });
      res.json(post);
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
