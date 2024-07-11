import axiosInstance from "@/utils/axiosInstance";

const blogService = {
  getBlogs(query = "") {
    return axiosInstance.get(`/blogs${query}`);
  },

  getBlogBySlug(slug) {
    return axiosInstance.get(`/blogs/${slug}`);
  },

  getBlogByCategories(query = "") {
    return axiosInstance.get(`/blog-categories${query}`);
  },
};


export default blogService;