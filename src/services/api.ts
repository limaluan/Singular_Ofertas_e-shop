import axios from "axios";

interface IRegisterUserDTO {
    username: string;
    password: string;
    email: string
}

export const api = axios.create({
    baseURL: 'https://galatika-shop.herokuapp.com/',
})

export async function registerUser({ username, password, email }: IRegisterUserDTO): Promise<Object> {
    const response = await api.post("/login", {
        username,
        password,
        email,
        admin: '0',
        avatar: null
    });

    return response.data;
};
