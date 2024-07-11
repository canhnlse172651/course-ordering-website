


import axiosInstance from "@/utils/axiosInstance";

export const teamService = {
  getAllCoach(query = "") {
    return axiosInstance.get(`/teams${query}`);
  },

 
};
