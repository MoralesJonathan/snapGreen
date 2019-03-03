import axios from "axios";

export default {
    getAllEvents(){
        return axios.get("/api/post");
    },
    createEvent(data){
        return axios.put("/api/post")
    },
    getAllStories(data){
        return axios.get("/api/story")
    }
};
