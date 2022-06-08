import { Container } from "./styles";

export default function Header() {
    const handleOpenMenuMobile = () => {
        document.querySelectorAll('.mobile').forEach((element) => {
            element.classList.toggle("on");
        })
    }
    
    return(
        <Container>
            <div className="menu-mobile-icon" onClick={handleOpenMenuMobile}>
                <div className="bar-one mobile"></div>
                <div className="bar-two mobile"></div>
                <div className="bar-three mobile"></div>
            </div>
            <img className="logoImg" src="https://i.imgur.com/0C8DIYD.png" alt="Singular Logo"/>
            <div className="user mobile">
                {/* <img src="https://static.remove.bg/remove-bg-web/669d7b10b2296142983fac5a5243789bd1838d00/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h2>Olá, User!</h2> */}
                <img src="https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg" />
                <p>Faça <b>login</b> ou <br /><b>crie sua conta</b></p>
            </div>
            <nav className="nav-menu mobile">
                <ul>
                    <li>Ínicio</li>
                    <li>Quem somos?</li>
                    <li>Perguntas Frequentes</li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li>Contate-nos</li>
                </ul>
            </nav>
        </Container>
    );
}
