import PATHS from "@/constant/path";
import { Empty } from "antd";
import { Link } from "react-router-dom";

function BlogList({ blogsByCate }) {
  
  return (
    <div className="blog__list">
      {blogsByCate?.length === 0 ? (
        <Empty description="No found any blog" style={{ margin: "0 auto" }} />
      ) : (
        blogsByCate?.map((blog, index) => {
          const { image, id, name, slug, description, category, author } = blog;

          const pathBlogDetail = PATHS.BLOG.INDEX + `/${slug}`

          return (
            <div className="blog__list-item" key={id}>
              <div className="img">
                <Link to={pathBlogDetail}>
                  <img
                    src={image}
                    alt="Khóa học CFD"
                    className="course__thumbnail"
                  />
                </Link>
              </div>
              <div className="content">
                <p className="label">{category.name}</p>
                <h2 className="title --t3">
                  <Link to="blog-detail.html">{name}</Link>
                </h2>
                <div className="content__info">
                  <div className="user">
                    <div className="user__img">
                      <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                    </div>
                    <p className="user__name">{author}</p>
                  </div>
                  {/* <div className="date">10/12/2022</div> */}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BlogList;
