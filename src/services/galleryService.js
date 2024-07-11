import axiosInstance from "@/utils/axiosInstance";

export const galleryService = {


    getAllGalleries(query = "") {
        return axiosInstance.get(`/galleries${query}`);
      },
      
      getGalleryById(id = "") {
        return axiosInstance.get(`/galleries${id}`);
      },

}