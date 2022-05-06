import Header from "../../components/Header";
import banner1 from "../../assets/img/banner_promo.png"
import { Container } from "./styles";
import Section from "../../components/Section";

function Home() {
    return (
        <>
            <Header />
            <Container>
                <img className="banner" src={banner1} alt="Banner Promoção" />
                <Section />
            </Container>
        </>
    )
}

export default Home;
