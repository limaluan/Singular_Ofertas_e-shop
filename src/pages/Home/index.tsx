import Header from "../../components/Header";
import banner1 from "../../assets/img/banner_promo.png"
import { Container } from "./styles";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <img src={banner1} alt="Banner Promoção" />
                <Section />
                <Section />
            </Container>
            <Footer />
        </>
    )
}
