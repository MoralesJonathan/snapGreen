import axios from "axios";

export default {
    getAllEvents(){
        return axios.get("/api/post");
    },
    createEvent(data){
        return axios.put("/api/post")
    }
};