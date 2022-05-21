import { useContext, useEffect, useState } from "react";
import { LoginModal } from "../Modals/LoginModal";
import { HeaderContainer, Container, User, BarMenu } from "./styles";

import { AuthContext } from "../../contexts/AuthContext";

import singularOfertasImg from "../../assets/img/singular_ofertas_name.svg";
import UserAvatarModal from "../Modals/UserAvatarModal";
import { destroyCookie } from "nookies";
import { Navigate } from "react-router";

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

    function logoutUser() {
        destroyCookie(undefined, 'singular.token');
        destroyCookie(undefined, 'singular.email');
        window.location.reload();
    }

    useEffect(() => {
        if (!user?.avatar) {
            return setUserAvatar('https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg');
        }

        return setUserAvatar(user.avatar);
    }, [isAuthenticated, user?.avatar]);

    return (
        <HeaderContainer>
            <Container>
                <a href="/"><img src={singularOfertasImg} alt="Singular Ofertas" /></a>

                <User>
                    {isAuthenticated
                        ? <img src={userAvatar} alt="Avatar" onClick={handleOpenUrlModal} />
                        : <img src={userAvatar} alt="Avatar" />
                    }
                    {isAuthenticated ?
                        <p>Bem-vindo,<br /> <b>{user?.username}</b> <br /> <button onClick={logoutUser}>Logout</button></p>
                        :
                        <p>Faça <b onClick={handleOpenLoginModal}>Login</b> ou <br />crie seu <b onClick={handleOpenRegisterModal}>Cadastro</b></p>
                    }
                </User>
            </Container>
            <BarMenu>
                <ul>
                    {user?.admin
                        ? <li><a href="/admin">Admin</a></li>
                        : <></>
                    }
                    <li><a href="/">Ínicio</a></li>
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
