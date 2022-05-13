import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import { api } from "../services/api";

interface ISignInCredentials {
    email: string;
    password: string;
};

interface IAuthContextData {
    signIn(credentials: ISignInCredentials): Promise<any>;
    user: IUser | undefined;
    isAuthenticated: boolean;
};

interface IAuthProviderProps {
    children: ReactNode;
};

interface IUser {
    email: string;
    admin: boolean;
    username: string;
};

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'singular.email': email } = parseCookies(); // Temporário até implmentação das funcionalidades do token

        if (email) {
            api.get(`/v1/user/${email}`).then(response => {
                const { email, admin, username } = response.data;
                console.log(response)
                setUser({
                    email,
                    admin,
                    username,
                })
            })
        }
    }, [])

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
            }); // Temporário até implmentação das funcionalidades do token
    
            api.get(`v1/user/${email}`).then(
                response => {
                    const { username, admin } = response.data;
    
                    setUser({
                        email,
                        admin,
                        username
                    });
                }
            )
            
            return response;
        } catch (err) {
            return console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, signIn, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}
