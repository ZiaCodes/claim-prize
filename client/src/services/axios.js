import axios from "axios"

axios.defaults.withCredentials = true
const URL = process.env.REACT_APP_API;

const instance = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
    },
});

export default instance;