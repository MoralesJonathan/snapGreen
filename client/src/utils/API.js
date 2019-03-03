import axios from "axios";

export default {
    getAllEvents(){
        return axios.get("/api/post");
    },
    createEvent(data){
        return axios.put("/api/post", data)
    },
    login(data){
        return axios.post('/api/login', data);
    },
    getAllStories(){
        return axios.get("/api/story")
    },
    createIncentive(data){
        return axios.put("/api/incentive", data)
    },
    getAllIncentive(){
        return axios.get("/api/incentive")
    }
};
