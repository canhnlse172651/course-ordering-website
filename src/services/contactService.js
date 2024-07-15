

import axiosInstance from "@/utils/axiosInstance";


const contactService = {

    getContact(payload = {}){
        return axiosInstance.post(`/subscribes`,payload)
    }
}


export default contactService