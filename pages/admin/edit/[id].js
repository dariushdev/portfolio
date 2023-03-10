import AdminForm from "../../../components/Admin/Form";
import prisma from "../../../lib/prisma";

export default function EditPage({ blogPost }) {
  return <AdminForm data={blogPost} method="PUT" />;
}

export async function getStaticProps(context) {
  const blogPost = await prisma.post.findFirst({
    where: {
      id: context.params.id,
    },
  });
  return {
    props: { blogPost },
  };
}
export async function getStaticPaths() {
  const posts = await prisma.post.findMany();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

EditPage.auth = true;
