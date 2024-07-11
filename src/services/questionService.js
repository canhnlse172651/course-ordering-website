



import axiosInstance from "@/utils/axiosInstance";

export const questionService = {
  getAllQuestion(query = "") {
    return axiosInstance.get(`/questions/${query}`);
  },
  
  getQuestionById(id = "") {
    return axiosInstance.get(`/questions/${id}`);
  },
 
};
