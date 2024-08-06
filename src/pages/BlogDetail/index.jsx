import BlogDetailTitle from "./BlogDetailTitle";
import BlogDetailContent from "./BlogDetailContext";
import BlogDetailRelated from "./BlogDetailRelated";
import { useParams } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import blogService from "@/services/blogService";
import { useEffect } from "react";
import useQuery from "@/hooks/useQuery";

function BlogDetail() {
  const { blogSlug } = useParams();

  const {
    execute,
    data: blogData,
    loading,
    error,
  } = useMutation(blogService.getBlogBySlug);

  const blog = blogData?.data || []; 

  const {
    data : blogListData,
    error : blogListError,
    loading : blogListLoading,
    refetch : fetch
  } = useQuery(blogService.getBlogs);

  const blogs = blogListData?.blogs || []; 

  

  const relatedBlog  = blogs?.filter((item) => item.slug != blogSlug )
  
 
  
   

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
          <BlogDetailContent blog = {blog} />
        </div>
        <BlogDetailRelated  relatedBlog = {relatedBlog} />
      </div>
    </main>
  );
}

export default BlogDetail;
