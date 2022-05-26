import { FormEvent, useContext, useEffect, useState } from "react";
import { registerUser } from "../../../services/api";

import Modal from "react-modal";

import closeImg from '../../../assets/img/close.svg';
import singularLogo from '../../../assets/img/singular_icon.png';
import { AuthContext } from "../../../contexts/AuthContext";

interface ILoginModalProps {
    isOpen: boolean;
    isLogin: boolean;
    changeIsLogin: (isLogin: boolean) => void;
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose, isLogin, changeIsLogin }: ILoginModalProps) {
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [loginModal, setLoginModal] = useState('visible');
    const [registerModal, setRegisterModal] = useState('invisible');

    const [loginError, SetLoginError] = useState('');
    const [registerError, SetregisterError] = useState('');

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        if (isLogin) {
            handleSwitchToLogin();
        } else {
            handleSwitchToRegister();
        }
    }, [isLogin])

    function handleSwitchToRegister() {
        changeIsLogin(false);
        setLoginModal('invisible');
        setRegisterModal('visible');
    }

    function handleSwitchToLogin() {
        changeIsLogin(true);
        setLoginModal('visible');
        setRegisterModal('invisible');
    }

    async function handleRegisterSubmit(event: FormEvent) {
        event.preventDefault();

        const response = await registerUser({
            username,
            password: userPassword,
            email: userEmail,
        });

        if (response.error) {
            return SetregisterError(response.error);
        }

        signIn({
            email: userEmail,
            password: userPassword
        });

        onRequestClose();
    }

    async function handleLoginSubmit(event: FormEvent) {
        event.preventDefault();

        const response = await signIn({
            email: userEmail,
            password: userPassword
        });

        if (!response) {
            return SetLoginError('Usuário ou senha inválido');
        }

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <img src={closeImg}
                alt="Fechar Modal"
                onClick={onRequestClose}
                className="closeModalImg"
            />

            <img src={singularLogo}
                alt="Singular Ofertas Logo"
                className="singularLogo" />

            <form className={loginModal} onSubmit={handleLoginSubmit}>
                <h2 className="title">Faça Seu Login</h2>

                <input type="text"
                    placeholder="Email"
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <input type="password"
                    placeholder="Senha"
                    onChange={(event) => setUserPassword(event.target.value)}
                />
                <p><b>{loginError}</b></p>
                <button type='submit'>Login</button>

                <p className="switchLogin">Não tem uma conta? <a href="#" onClick={handleSwitchToRegister}>Cadastre-se</a></p>
            </form>

            <form className={registerModal}
                onSubmit={handleRegisterSubmit}>
                <h2 className="title">Crie sua conta</h2>

                <input type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input type="email"
                    placeholder="Email"
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <input type="password"
                    placeholder="Senha"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                />
                <p><b>{registerError}</b></p>
                <button type="submit">Cadastrar</button>

                <p className="switchLogin">Já possui uma conta? <a href="#" onClick={handleSwitchToLogin}>Faça Login</a></p>
            </form>
        </Modal >
    )
}
