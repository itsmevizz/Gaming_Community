import axios from "axios";
const token = localStorage.getItem("Token")
const API = axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        token: token
    }
})

export const signin = ({ email, password }) => API.post("/login", { email, password })
export const communities = () => API.get("/all/community")
export const members = () => API.get('/all/users')
export const groupChat = (id) => API.get(`/get/singleCommunityMessage?id=${id}`)
export const newCommunityMessage = (data) => API.post(`/new/message?id=${data.channelId}`, data.msg)
export const joinCommunity = (data) => API.patch(`/join/community?id=${data.data}`, data)
export const follow = (data) => API.patch('/follow/user', data)
export const ValidateToken = () => API.post('/validateToken')
export const createCommunity = (data) => API.post('/new/community', data)
export const unfollow = (data) => API.patch('un/follow', data)