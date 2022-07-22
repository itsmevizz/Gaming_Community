import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:3005"
})

export const signin = ({email, password}) =>API.post("/login", {email, password})