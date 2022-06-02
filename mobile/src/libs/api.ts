import axios from "axios";

export const api =  axios.create({
  baseURL: 'http://172.19.34.224:3333'
})