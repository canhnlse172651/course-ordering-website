import { formartDate } from "@/utils/formartDate";

function BlogDetailTitle({blog}) {

  
  return (
    <div className="blogdetail__title">
      <h1 className="title --t2">
       {blog.name}
      </h1>
      <ul className="meta">
        <li className="meta__item">Đăng bởi Trần Nghĩa</li>
        <li className="meta__item">Dev</li>
        <li className="meta__item">{formartDate(blog.createdAt,"DD/MM/YYYY")}</li>
      </ul>
    </div>
  );
}

export default BlogDetailTitle;
