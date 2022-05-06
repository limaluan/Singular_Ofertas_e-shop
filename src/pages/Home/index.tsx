import Header from "../../components/Header";
import banner1 from "../../assets/img/banner_promo.png"
import { Container } from "./styles";

function Home() {
    return (
        <Container>
            <Header />
            <img className="banner" src={banner1} alt="Banner Promoção" />
        </Container>
    )
}

export default Home;
