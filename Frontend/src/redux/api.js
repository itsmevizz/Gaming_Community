import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3005",
})
export const ValidateToken = (token) => API({
    method: "post",
    url: "/validateToken",
    headers: {
        token: token
    }
})

export const signin = ({ email, password }) => API.post("/login", { email, password })
export const communities = ()=>API.get("/all/community")
export const members = () =>API.get('/all/users')
export const groupChat = (id) =>API.get(`/get/singleCommunityMessage?id=${id}`)
export const newCommunityMessage = (data) => API.post(`/new/message?id=${data.channelId}`,data.msg)
export const joinCommunity = (data)=> API.patch(`/join/community?id=${data.data}`,data ) 
export const myCommunities = (data)=>API.get(`/my/communities?id=${data}`)