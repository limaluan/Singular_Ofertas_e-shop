import axios from "axios";
import { parseCookies } from "nookies";

const { 'singular.token': token } = parseCookies();

export const api = axios.create({
    baseURL: 'https://galatika-shop.herokuapp.com/',
    headers: {
        Authorization: `Bearer ${token}`,
    }
})
