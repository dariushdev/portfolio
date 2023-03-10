import { format } from "date-fns";
import enGB from "date-fns/locale/en-GB/index";

import dashboard from "../../styles/components/Admin/Dashboard.module.scss";

export default function Dashboard({ data }) {
  return (
    <div>
      <div>
        <a href="create">Create new article</a>
      </div>
      <table className={dashboard.dashboard}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Published</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.title}>
                <td>{d.slug}</td>
                <td>{d.title}</td>
                <td>
                  <div className={dashboard.flair}>
                    {d.published ? (
                      <div className={dashboard.flairTextPublished}>
                        Published
                      </div>
                    ) : (
                      <div className={dashboard.flairTextUnpublished}>
                        Unpublished
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  {format(d.createdAt, "MMMM dd", {
                    locale: enGB,
                  })}
                </td>
                <td>
                  <a href={"/admin/edit/" + d.id}>
                    <i className="fa-solid fa-pen-to-square m-5"></i>
                  </a>
                  <i
                    className="fa-solid fa-xmark m-5"
                    onClick={() => setPost(article.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const blogPosts = await prisma.post.findMany();
  return {
    props: { blogPosts },
  };
}
