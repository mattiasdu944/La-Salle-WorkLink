import axios from "axios";

const worklinkApi = axios.create({
    baseURL: '/api'
})

export default worklinkApi;