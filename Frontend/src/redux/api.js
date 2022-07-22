import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:3005"
})

export const sigin = (formdata) =>API.post("/login", formdata)