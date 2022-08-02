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
