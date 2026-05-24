import axios from "axios";

const fetcher = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})


export default fetcher;