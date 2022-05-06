import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/img/close.svg';
import singularLogo from '../../assets/img/singular_icon.png';
import { api } from "../../services/api";
import "./styles.css";

interface loginModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function LoginModal({ isOpen, onRequestClose }: loginModalProps) {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [loginModal, setLoginModal] = useState('visible');
    const [registerModal, setRegisterModal] = useState('invisible');

    function handleSwitchToRegister() {
        setLoginModal('invisible');
        setRegisterModal('visible');
    }

    function handleSwitchToLogin() {
        setLoginModal('visible');
        setRegisterModal('invisible');
    }

    async function handleRegisterSubmit(event: FormEvent) {
        event.preventDefault();

        const user = {
            username: registerUsername,
            password: registerPassword,
            email: registerEmail,
            admin: '0',
            avatar: 'asasasa'
        }

        console.log(`DEBUG USER:`);
        console.log(user);
        
        await api.post("/login", user,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => console.log("POsting Data ", res)).catch(err => console.log(err));
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
