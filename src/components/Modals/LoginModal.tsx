import Modal from 'react-modal';
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';

interface ILoginModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function LoginModal({ isOpen, onRequestClose }: ILoginModalProps) {
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const response = await signIn({
            email: userEmail,
            password: userPassword,
        });

        if (!response) {
            return setErrorMessageModal('Usuário ou senha inválido');
        }

        return onRequestClose();
    }

    const [errorMessageModal, setErrorMessageModal] = useState('');

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        const response = await api.post('/v1/user', {
            username,
            password: userPassword,
            email: userEmail,
            admin: "0",
            avatar: "https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg",
        });

        if (response.data.error) {
            return setErrorMessageModal(response.data.error);
        }

        await signIn({
            email: userEmail,
            password: userPassword,
        });

        return onRequestClose();
    }

    const [isLoginMode, setLoginMode] = useState(true);

    const switchLoginMode = () => {
        setErrorMessageModal('');
        return setLoginMode(!isLoginMode);
    }

    Modal.setAppElement("#__next")
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
        >
            <img
                src="./singular_icon.png"
                alt="Singular Logo"
                className='singularLogo' />
            <h2>Faça seu {isLoginMode ? 'Login' : 'Cadastro'}</h2>
            <form onSubmit={isLoginMode ? handleLogin : handleRegister}>
                {isLoginMode
                    ? <></>
                    : <input type="text" placeholder='Usuário'
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                }
                <input type="email" placeholder='Email'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                />
                <input type="password" placeholder='Senha'
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)}
                />
                <p><b>{errorMessageModal}</b></p>
                {isLoginMode
                    ? <p>Não tem uma conta? <a href='#' onClick={switchLoginMode}>Cadastre-se</a></p>
                    : <p>Já possui uma conta? <a href='#' onClick={switchLoginMode}>Faça Login</a></p>
                }
                <button type='submit'>{isLoginMode ? "Login" : "Cadastre-se"}</button>
            </form>
        </Modal>
    )
}
