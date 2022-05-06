import axios from "axios";

export const api = axios.create({
    baseURL: 'https://galatika-shop.herokuapp.com/',
})
