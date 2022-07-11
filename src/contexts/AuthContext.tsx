import { setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface IAuthProviderProps {
    children: ReactNode;
};

interface IAuthContextData {
    signIn(credentials: ISignInCredentials): Promise<any>;
    user: IUser | undefined;
};

interface ISignInCredentials {
    email: string;
    password: string;
};

interface IUser {
    email: string;
    admin: boolean;
    username: string;
    avatar: string;
};

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        api.get('/v1/user').then(response => {
            const { username, admin, avatar, email } = response.data;

            setUser({
                email,
                username,
                admin,
                avatar,
            })
        });
    }, [user]);

    async function signIn({ email, password }: ISignInCredentials) {
        try {
            const response = await api.post('/v1/login', {
                email,
                password,
            });

            if (response.data.error) {
                return console.log(response.data.error);
            }

            const { access_token: token } = response.data;

            setCookie(undefined, 'singular.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            setCookie(undefined, 'singular.email', email, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            }); // Temporário até implementação das funcionalidades do token

            api.get(`v1/user/${email}`).then(
                response => {
                    const { username, admin, avatar } = response.data;

                    setUser({
                        email,
                        admin,
                        username,
                        avatar
                    });
                }
            )

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            return response;
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ signIn, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}
