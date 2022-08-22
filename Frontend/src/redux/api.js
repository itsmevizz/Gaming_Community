import axios from "axios";

// const token = localStorage.getItem("Token")
const API = axios.create({
  baseURL: "http://localhost:3005",
  // headers: {
  //     token: localStorage.getItem("Token")
  // }
});

export const signin = ({ email, password }) =>
  API.post("/login", { email, password });
export const communities = () => API.get("/all/community");
export const members = () => API.get("/all/users");
export const groupChat = (id) =>
  API.get(`/get/singleCommunityMessage?id=${id}`);

export const newCommunityMessage = (data) =>
  API({
    method: "post",
    url: `/new/message?id=${data.channelId}`,
    data: data.msg,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const joinCommunity = (data) =>
  API({
    method: "patch",
    url: `/join/community?id=${data.data}`,
    data: data,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const follow = (data) =>
  API({
    method: "patch",
    url: "/follow/user",
    data: data,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const ValidateToken = () =>
  API({
    method: "post",
    url: "/validateToken",
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const createCommunity = (data) =>
  API({
    method: "post",
    url: "/new/community",
    data: data,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const unfollow = (data) =>
  API({
    method: "patch",
    url: "un/follow",
    data: data,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const followers = () =>
  API({
    method: "get",
    url: "/my/friends",
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const personalMsg = (id) =>
  API({
    method: "get",
    url: `get/personal/chat?id=${id}`,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });

export const newPersonalMessage = (data) =>
  API({
    method: "post",
    url: `/new/personal/chat`,
    data: data,
    headers: {
      token: localStorage.getItem("Token"),
    },
  });
