import axios from "axios";
import { parseCookies } from 'nookies';

const cookies = parseCookies();

interface IRegisterUserDTO {
    username: string;
    password: string;
    email: string
}

export const api = axios.create({
    baseURL: 'https://galatika-shop.herokuapp.com/',
    headers: {
        Authorization: `Bearer ${cookies['singular.token']}`,
    }
})

export async function registerUser({ username, password, email }: IRegisterUserDTO): Promise<any> {
    const response = await api.post("/v1/user", {
        username,
        password,
        email,
        admin: '0',
        avatar: null
    });

    return response.data;
};
