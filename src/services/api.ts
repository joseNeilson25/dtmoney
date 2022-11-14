import axios from "axios";

export const api = axios.create({
    baseURL:'https://dtmoney-five-zeta.vercel.app/api'
    // baseURL:'http://localhost:3000/api'
})