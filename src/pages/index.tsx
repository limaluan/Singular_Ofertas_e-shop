import Head from "next/head";
import Carousel from "../components/Carousel";
import Container from "./styles";

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Singular | Ínicio</title>
            </Head>
            <Carousel />
        </Container>
    )
}
