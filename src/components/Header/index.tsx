import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AvatarModal from "../Modals/AvatarModal";
import LoginModal from "../Modals/LoginModal";
import { Container } from "./styles";

export default function Header() {
    const toggleOpenMenuMobile = () => {
        if (window.innerWidth >= 768) {
            return document.querySelectorAll('.mobile').forEach((element) => {
                element.classList.remove("on");
            })
        }
        
        document.querySelectorAll('.mobile').forEach((element) => {
            element.classList.toggle("on");
        })
    }

    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);

    const handleLoginModeModal = () => {
        setIsLoginMode(true);
        setIsLoginModalOpen(true);
    };

    const handleRegisterModeModal = () => {
        setIsLoginMode(false);
        setIsLoginModalOpen(true);
    };

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className="menu-mobile-icon" onClick={toggleOpenMenuMobile}>
                <div className="bar-one mobile"></div>
                <div className="bar-two mobile"></div>
                <div className="bar-three mobile"></div>
            </div>
            <img className="logoImg" src="https://i.imgur.com/0C8DIYD.png" alt="Singular Logo" />

            <div className="user mobile">
                {user
                    ? <><img src={user.avatar} onClick={() => setAvatarModalOpen(true)} />
                        <h2>Olá, {user.username}!</h2></>
                    : <><img src="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg" />
                        <p>Faça <a onClick={handleLoginModeModal} href="#">Login</a> ou <br /><a href="#" onClick={handleRegisterModeModal}>Crie sua conta</a></p></>
                }
            </div>

            <nav className="nav-menu mobile">
                <ul onClick={toggleOpenMenuMobile}>
                    <li><Link href={'/'}>Ínicio</Link></li>
                    <li>Quem somos?</li>
                    <li>Perguntas Frequentes</li>
                    <li><Link href={'/produtos'}>Produtos</Link></li>
                    <li>Contate-nos</li>
                    {user
                        ? <li>Sair</li>
                        : <></>
                    }
                </ul>
            </nav>

            <LoginModal
                isOpen={isLoginModalOpen}
                onRequestClose={() => setIsLoginModalOpen(false)}
                LoginMode={isLoginMode}
            />
            <AvatarModal
                isOpen={isAvatarModalOpen}
                onRequestClose={() => setAvatarModalOpen(false)}
            />
        </Container>
    );
}
