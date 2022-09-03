import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL

export const api = axios.create({
    url: BASE_URL
})