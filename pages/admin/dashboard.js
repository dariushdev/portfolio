import Dashboard from "../../components/Admin/Dashboard";
import prisma from "../../lib/prisma";

export default function DashboardPage({ blogPosts }) {
  return <Dashboard data={blogPosts} />;
}

DashboardPage.auth = true;

export async function getStaticProps() {
  const blogPosts = await prisma.post.findMany();
  return {
    props: { blogPosts },
  };
}
