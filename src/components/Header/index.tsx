import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LoginModal from "../Modals/LoginModal";
import { Container } from "./styles";

export default function Header() {
    const handleOpenMenuMobile = () => {
        document.querySelectorAll('.mobile').forEach((element) => {
            element.classList.toggle("on");
        })
    }

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className="menu-mobile-icon" onClick={handleOpenMenuMobile}>
                <div className="bar-one mobile"></div>
                <div className="bar-two mobile"></div>
                <div className="bar-three mobile"></div>
            </div>
            <img className="logoImg" src="https://i.imgur.com/0C8DIYD.png" alt="Singular Logo" />
            <div className="user mobile">
                {user
                    ? <><img src={user.avatar} />
                        <h2>Olá, {user.username}!</h2></>
                    : <><img src="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg" />
                        <p>Faça <a onClick={() => setIsLoginModalOpen(true)}>Login</a> ou <br /><a href="#">Crie sua conta</a></p></>
                }
            </div>
            <nav className="nav-menu mobile">
                <ul>
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
            />
        </Container>
    );
}
