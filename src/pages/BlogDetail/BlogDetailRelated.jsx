import { Link } from "react-router-dom";
import PATHS from "@/constant/path";
import { formartDate } from "@/utils/formartDate";
function BlogDetailRelated({ relatedBlog }) {
  const halfRelatedBlogs = relatedBlog.slice(0, 3);

  console.log("halfRelatedBlogs", halfRelatedBlogs);

  return (
    <div className="blogdetail__related">
      <h2 className="blogdetail__related-title title --t2">
        Bài viết liên quan
      </h2>
      <div className="blog__list">
        {halfRelatedBlogs?.map((blog, index) => {
          const {
            image,
            id,
            name,
            slug,
            description,
            category,
            author,
            updatedAt,
          } = blog;

          const pathBlogDetail = PATHS.BLOG.INDEX + `/${slug}`;

          return (
            <div className="blog__list-item" key={index}>
              <div className="img">
                <Link to={pathBlogDetail}>
                  <img
                    src={
                      image ||
                      "https://cfdcourses.cfdcircle.vn/images/blog/oCbb35rOM1FsNEYqcOLIk-Screenshot%202024-03-06%20at%2019.57.08.png"
                    }
                    alt="Blog CFD"
                    className="course__thumbnail"
                  />
                </Link>
              </div>
              <div className="content">
                <p className="label">Dev</p>
                <h2 className="title --t3">
                  <Link to={pathBlogDetail}>{name}</Link>
                </h2>
                <div className="content__info">
                  <div className="user">
                    <div className="user__img">
                      <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                    </div>
                    <p className="user__name">{author}</p>
                  </div>
                  <div className="date">
                    {formartDate(updatedAt, "DD/MM/YYYY")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogDetailRelated;
