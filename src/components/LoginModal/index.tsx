import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services/api";

import Modal from "react-modal";
import "./styles.css";

import closeImg from '../../assets/img/close.svg';
import singularLogo from '../../assets/img/singular_icon.png';

interface loginModalProps {
    isOpen: boolean;
    isLogin: boolean;
    changeIsLogin: (isLogin: boolean) => void;
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose, isLogin, changeIsLogin }: loginModalProps) {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [loginModal, setLoginModal] = useState('visible');
    const [registerModal, setRegisterModal] = useState('invisible');

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


        await api.post("/login", {
            username: registerUsername,
            password: registerPassword,
            email: registerEmail,
            admin: '0',
            avatar: 'asasasa'
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => console.log("Posting Data ", res)).catch(err => console.log(err));
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

            <form className={loginModal}>
                <h2 className="title">Faça Seu Login</h2>

                <input type="text"
                    placeholder="Email"
                />
                <input type="text" placeholder="Senha" />
                <button>Login</button>

                <p className="switchLogin">Não tem uma conta? <a href="#" onClick={handleSwitchToRegister}>Cadastre-se</a></p>
            </form>

            <form className={registerModal}
                onSubmit={handleRegisterSubmit}>
                <h2 className="title">Crie sua conta</h2>

                <input type="text"
                    placeholder="Usuário"
                    value={registerUsername}
                    onChange={(event) => setRegisterUsername(event.target.value)}
                />
                <input type="email"
                    placeholder="Email"
                    value={registerEmail}
                    onChange={(event) => setRegisterEmail(event.target.value)}
                />
                <input type="password"
                    placeholder="Senha"
                    value={registerPassword}
                    onChange={(event) => setRegisterPassword(event.target.value)}
                />
                <button type="submit">Cadastrar</button>

                <p className="switchLogin">Já possui uma conta? <a href="#" onClick={handleSwitchToLogin}>Faça Login</a></p>
            </form>
        </Modal >
    )
}
