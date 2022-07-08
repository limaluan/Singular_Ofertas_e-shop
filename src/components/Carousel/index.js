import Container from "./styles";
import BannerCarousel from "react-elastic-carousel";

export default function Carousel() {
    return (
        <Container>
            <BannerCarousel enableAutoPlay autoPlaySpeed={7000}>
                <img src="./banner1.png" loading="lazy"/>
                <img src="./banner2.png" loading="lazy"/>
                <img src="./banner3.png" loading="lazy"/>
            </BannerCarousel>
        </Container>
    );
}
