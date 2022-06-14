import Head from "next/head";
import { useState } from "react";
import Container from "./styles";

export default function Home() {
    const [carouselPosition, setCarouselPosition] = useState(0);

    const slideNextImage = () => {
        console.log(`next Image ${carouselPosition}`)
        const images = document.querySelectorAll('.banners-image');
        if (((images.length -1) * -100) >= carouselPosition) {
            setCarouselPosition(0);
            return document.getElementById('banners-content').style.transform = `translateX(${carouselPosition}vw)`;
        }
        setCarouselPosition(carouselPosition - 100);
        document.getElementById('banners-content').style.transform = `translateX(${carouselPosition}vw)`;
    }

    const slidePrevImage = () => {
        console.log(`Prev Image ${carouselPosition}`)
        if (carouselPosition >= 0) {
            setCarouselPosition(0);
            return document.getElementById('banners-content').style.transform = `translateX(${carouselPosition}vw)`;
        }
        setCarouselPosition(carouselPosition + 100);
        document.getElementById('banners-content').style.transform = `translateX(${carouselPosition}vw)`;
    }

    return (
        <Container>
            <Head>
                <title>Singular | Ínicio</title>
            </Head>
            <section className="banners">
                <button className="next-btn" onClick={slideNextImage}>►</button>
                <button className="prev-btn" onClick={slidePrevImage}>◄</button>
                <div id="banners-content">
                    <img className="banners-image" src="./banner1.png" loading="lazy" alt="Banner Promocional" />
                    <img className="banners-image" src="./banner2.png" loading="lazy" alt="Banner Promocional" />
                    <img className="banners-image" src="./banner3.png" loading="lazy" alt="Banner Promocional" />
                </div>
            </section>
        </Container>
    )
}
