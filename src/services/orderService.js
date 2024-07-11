import axiosInstance from "@/utils/axiosInstance";

import { localToken } from "@/utils/token";

export const orderService = {
  getPaymentHistories() {
    return axiosInstance.get(`/orders/me`);
  },

  getCourseHistories() {
    return axiosInstance.get(`/orders/courses/me`, {
      headers: {
        Authorization: `Bearer ${localToken.get()?.accessToken}`,
      },
    });
  },

  orderCourse(payload = {}) {
    return axiosInstance.post(`orders`, payload);
  },
};
