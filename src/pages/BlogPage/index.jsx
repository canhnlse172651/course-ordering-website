import BlogMenu from "./BlogMenu";
import BlogList from "./BlogList";
import blogService from "@/services/blogService";
import { useEffect, useState } from "react";
import useQuery from "@/hooks/useQuery";

function BlogPage() {

  const [selectedCategory, setSelectedCategory] = useState("");

  const [blogsByCate, setBlogByCate] = useState([])

   const {
     data : categoriesData ,
     loading : categoriesLoading ,
     error  : categoriesError ,
     refetch : fetch
   }   = useQuery (blogService.getBlogByCategories)


   const categories = categoriesData?.blogs || [];


   useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs(`?category=${selectedCategory}`);
         if(response?.data){
          setBlogByCate(response?.data?.data?.blogs);
         }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setBlogByCate([]);
        } else {
          console.error("Failed to fetch blogs", error);
        }
      }
    };

    fetchBlogs();
  }, [selectedCategory]);



  return (
    <main className="mainwrapper blog --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Blog</h2>
          </div>
        </div>
        <BlogMenu categories = {categories}  setSelectedCategory = {setSelectedCategory}  selectedCategory = {selectedCategory}  />
        <BlogList  blogsByCate = {blogsByCate}  />
        {/* <Paging/> */}
      </div>
    </main>
  );
}

export default BlogPage;
