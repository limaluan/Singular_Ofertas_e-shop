import { useState } from "react";
import singularOfertasImg from "../../assets/img/singular_ofertas_name.svg";
import avatarDefaultImg from "../../assets/img/avatar.svg";
import { LoginModal } from "../LoginModal";
import { HeaderContainer, Container, User, BarMenu } from "./styles";

export default function Header() {
    const [isLoginModalOpen, setisLoginModalOpen] = useState(false);

    function handleOpenLoginModal() {
        setisLoginModalOpen(true);
    }

    function handleCloseLoginModal() {
        setisLoginModalOpen(false);
    }

    return (
        <HeaderContainer>
            <Container>
                <img src={singularOfertasImg} className="logo" alt="Singular Ofertas" />

                <User>
                    <img className="avatar" src={avatarDefaultImg} alt="Singular Ofertas" />
                    <p>Faça <b onClick={handleOpenLoginModal}>Login</b> ou <br />crie seu <b onClick={handleOpenLoginModal}>Cadastro</b></p>
                </User>
            </Container>
            <BarMenu>
                <ul>
                    <li>Ínicio</li>
                    <li>Quem somos?</li>
                    <li>Perguntas Frequentes</li>
                    <li>Produtos</li>
                    <li>Contate-nos</li>
                </ul>
            </BarMenu>

            <LoginModal isOpen={isLoginModalOpen}
                onRequestClose={handleCloseLoginModal}
            />
        </HeaderContainer>
    )
}
