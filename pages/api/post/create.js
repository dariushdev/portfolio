import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import prisma from "../../../lib/prisma";

export default async function createApi(req, res) {
  const { title, slug, content, checked } = req.body;

  const session = await unstable_getServerSession(req, res, authOptions);

  if (!title || !slug || !content) {
    res.status(400).json({ message: "Please fill all required fields." });
    return;
  }

  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });

  if (post) {
    res.status(400).json({ message: "Slug already exists." });
    return;
  }

  if (session) {
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        published: checked,
        slug: slug,
        createdAt: new Date(),
        author: { connect: { email: session?.user?.email } },
      },
    });
    res.json({ message: "Post successfully created." });
  } else {
    res.status(401);
  }

  res.end();
}
