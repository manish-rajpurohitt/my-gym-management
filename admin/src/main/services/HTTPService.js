import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAll = () => {
    return http.get("/posts");
};

const get = id => {
    return http.get(`${BASE_URL}/tutorials/${id}`);
};

const create = data => {

    
    data.startDate = new Date(data.startDate)
    data.endDate= new Date(data.endDate)
    data.dob= new Date(data.dob)
    console.log(data)

    return http.post(`${BASE_URL}/api/admin/members/addMember`, data, {
        "authorization": "Bearer "+ sessionStorage.getItem("authtoken")
    });
};

const update = (id, data) => {
    return http.put(`${BASE_URL}/tutorials/${id}`, data);
};

const remove = id => {
    return http.delete(`${BASE_URL}/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete(`${BASE_URL}/tutorials`);
};

const findByTitle = title => {
    return http.get(`${BASE_URL}/tutorials?title=${title}`);
};

const getAllMembers = () =>{
    return http.get(`${BASE_URL}/api/admin/members/getAllMembers`, {
        headers:{
            "authorization": "Bearer "+sessionStorage.getItem("authtoken")
        }
    });
}

const getAllSubscribedMembers = () =>{
    return http.get(`${BASE_URL}/api/admin/members/getAllSubscribedMembers`, {
        headers:{
            "authorization": "Bearer "+sessionStorage.getItem("authtoken")
        }
    });
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    getAllMembers,
    getAllSubscribedMembers
};