import { createContext, ReactNode } from "react";
import { api } from "../services/api";

interface ISignInCredentials {
    email: string;
    password: string;
}

interface IAuthContextData {
    signIn(credentials: ISignInCredentials): Promise<void>;
    isAuthenticated: boolean;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
    const isAuthenticated = false;

    async function signIn({ email, password }: ISignInCredentials) {
        try {
            const response = await api.post('/auth/token', {
                username: email,
                password
            });

            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, signIn }}
        >
            {children}
        </AuthContext.Provider>
    );
}
