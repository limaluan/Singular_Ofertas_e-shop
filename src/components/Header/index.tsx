import { useContext, useEffect, useState } from "react";
import { LoginModal } from "../LoginModal";
import { HeaderContainer, Container, User, BarMenu } from "./styles";

import { AuthContext } from "../../contexts/AuthContext";

import singularOfertasImg from "../../assets/img/singular_ofertas_name.svg";
import UserAvatarModal from "../UserAvatarModal";

export default function Header() {
    const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
    const [isLoginModal, setIsLoginModal] = useState(true);

    function handleOpenLoginModal() {
        setIsLoginModal(true);
        setisLoginModalOpen(true);
    }

    function handleOpenRegisterModal() {
        setIsLoginModal(false);
        setisLoginModalOpen(true);
    }

    function handleCloseLoginModal() {
        setisLoginModalOpen(false);
    }

    function handleToggleIsLogin(isLogin: boolean) {
        setIsLoginModal(isLogin);
    }

    const { isAuthenticated, user } = useContext(AuthContext);

    const [userAvatar, setUserAvatar] = useState('');

    const [isUserAvatarModalOpen, setUserAvatarModalOpen] = useState(false);


    function handleCloseUrlModal() {
        setUserAvatarModalOpen(false);
    }

    function handleOpenUrlModal() {
        setUserAvatarModalOpen(true);
    }

    useEffect(() => {
        if (!user?.avatar) {
            return setUserAvatar('https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg');
        }

        return setUserAvatar(user.avatar);
    }, [isAuthenticated]);

    return (
        <HeaderContainer>
            <Container>
                <img src={singularOfertasImg} alt="Singular Ofertas" />

                <User>
                    {isAuthenticated
                        ? <img src={userAvatar} alt="Avatar" onClick={handleOpenUrlModal} />
                        : <img src={userAvatar} alt="Avatar" />
                    }
                    {isAuthenticated ?
                        <p>Bem-vindo,<br /> <b>{user?.username}</b></p>
                        :
                        <p>Faça <b onClick={handleOpenLoginModal}>Login</b> ou <br />crie seu <b onClick={handleOpenRegisterModal}>Cadastro</b></p>
                    }
                </User>
            </Container>
            <BarMenu>
                <ul>
                    {user?.admin
                        ? <li>Admin</li>
                        : <></>
                    }
                    <li>Ínicio</li>
                    <li>Quem somos?</li>
                    <li>Perguntas Frequentes</li>
                    <li>Produtos</li>
                    <li>Contate-nos</li>
                </ul>
            </BarMenu>

            <LoginModal isOpen={isLoginModalOpen}
                onRequestClose={handleCloseLoginModal}
                isLogin={isLoginModal}
                changeIsLogin={handleToggleIsLogin}
            />

            <UserAvatarModal
                isOpen={isUserAvatarModalOpen}
                onRequestClose={handleCloseUrlModal}
            />

        </HeaderContainer>
    )
}
