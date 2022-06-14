import Modal from 'react-modal';
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';

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

        onRequestClose();
        console.log(response);
    }

    Modal.setAppElement("#__next")
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            
        // appElement={document.getElementById('root') || undefined}
        >
            <img
                src="./singular_icon.png"
                alt="Singular Logo"
                className='singularLogo' />
                <h2>Faça seu Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Email'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                />
                <input type="password" placeholder='Senha'
                    value={userPassword} onChange={(e) => setUserPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </Modal>
    )
}
