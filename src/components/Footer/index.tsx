import Container from './styles';

export default function Footer() {
    return (
        <Container>
            <div className='payment-methods'>
                <h3>Formas de Pagamento</h3>
                <ul>
                    <li><img loading='lazy' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/visa.svg" alt="Bandeira Visa" /></li>
                    <li><img loading='lazy' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/mastercard.svg" alt="Bandeira Mastercard" /></li>
                    <li><img loading='lazy' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/hipercard.svg" alt="Bandeira Hipercard" /></li>
                    <li><img loading='lazy' src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/elo.svg" alt="Bandeira Elo" /></li>
                </ul>
            </div>
            <hr />
            <div className='footer-menu'>
                <ul>
                    <li><h3>Dúvidas</h3></li>
                    <li><a href="#">Central de atendimento</a></li>
                    <li><a href="#">Trocas e Devoluções</a></li>
                    <li><a href="#">Processo de Entrega</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
                <ul>
                    <li><h3>Serviços</h3></li>
                    <li><a href="#">Tipos de entrega</a></li>
                    <li><a href="#">Negócios corporativos</a></li>
                    <li><a href="#">Seguro roubo e furto</a></li>
                    <li><a href="#">Vale presente</a></li>
                </ul>
            </div>
            <p>singular ofertas / CNPJ: 00.000.000/0000-00 / Inscrição Estadual: XX.XXX.XX-X / Endereço Rua Sacadura Cabral, 102 - Aracaju, SE - 20000-902 / fale com a gente</p>
        </Container>
    )
}