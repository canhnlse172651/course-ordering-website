import BlogDetailTitle from "./BlogDetailTitle";
import BlogDetailContent from "./BlogDetailContext";
import BlogDetailRelated from "./BlogDetailRelated";
import { useParams } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import blogService from "@/services/blogService";
import { useEffect } from "react";

function BlogDetail() {
  const { blogSlug } = useParams();

  const {
    execute,
    data: blogData,
    loading,
    error,
  } = useMutation(blogService.getBlogBySlug);

  const blog = blogData?.data || [];

  useEffect(() => {
    if (blogSlug) {
      execute(blogSlug);
    }
  }, [blogSlug]);

  
  return (
    <main className="mainwrapper blogdetail --ptop">
      <div className="container">
        <div className="wrapper">
          <BlogDetailTitle blog = {blog}  />
          <BlogDetailContent />
        </div>
        <BlogDetailRelated />
      </div>
    </main>
  );
}

export default BlogDetail;
