import { Container } from "./styles";

export default function Header() {
    return(
        <Container>
            <img className="logoImg" src="https://i.imgur.com/0C8DIYD.png" alt="Singular Logo"/>
            <div className="menu-mobile-icon">
                <div className="bar-one"></div>
                <div className="bar-two"></div>
                <div className="bar-three"></div>
            </div>
            <div className="user">
                {/* <img src="https://static.remove.bg/remove-bg-web/669d7b10b2296142983fac5a5243789bd1838d00/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h2>Olá, User!</h2> */}
                <img src="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg" />
                <h2>Faça Login</h2>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li>Ínicio</li>
                    <li>Quem somos?</li>
                    <li>Perguntas Frequentes</li>
                    <li>Produtos</li>
                    <li>Contate-nos</li>
                </ul>
            </nav>
        </Container>
    );
}
