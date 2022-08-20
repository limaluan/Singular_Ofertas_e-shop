import axios from "axios";
import Head from "next/head";
import router from "next/router";
import { useEffect, useState } from "react";
import Container from "./styles";

export const LuanProfile = () => {
    const [bioLuan, setBioLuan] = useState();

    useEffect(() => {
        axios.get(`https://api.github.com/users/limaluan`).then(response => setBioLuan(response.data.bio));
    }, []);

    return (
        <article>
            <img src="https://avatars.githubusercontent.com/u/83187601?v=4" alt="" />
            <p><a href="https://github.com/limaluan" target='new_blank'>Luan Lima</a> - Front-End<br />
                {bioLuan}<br />
                Skills: ReactJs | NodeJs | NextJs | TypeScript | JavaScript | MySQL | Docker <br /> <br />
                <a href="https://limadev.netlify.app/" target='new_blank'>Portifólio</a>
            </p>
        </article>
    )
};

export const KaioProfile = () => {
    const [bioKaio, setBioKaio] = useState();

    useEffect(() => {
        axios.get(`https://api.github.com/users/KaioAntonio`).then(response => setBioKaio(response.data.bio));
    }, []);

    return (
        <article>
            <img src="https://avatars.githubusercontent.com/u/75454785?v=4" alt="" />
            <p><a href="https://github.com/KaioAntonio" target='new_blank'>Kaio Antônio</a> - Back-End<br />
                {bioKaio}<br />
                Skills: Python | FastApi | Django | Java | SpringBoot | PostgreSQL <br /><br />
                <a href="https://kaio-antonio-portfolio.herokuapp.com/" target='new_blank'>Portifólio</a>
            </p>
        </article>
    )
};

export default function QuemSomos() {
    return (
        <>
            <Head>
                <title>Singular | Sobre nós</title>
            </Head>
            <Container>
                <h1>O Projeto</h1>
                <p>Este projeto foi desenvolvido com intuito de praticar e experenciar
                    como seria um projeto real.<br />
                    <br />Acabamos desenvolvendo habilidades, que antes não possuíamos
                    desenvolvendo projetos individualmente, como trabalho em equipe.<br />
                    <br />Além disso, nos preocupamos muito com a qualidade e performance do código, inclusive a tomada de decisão das tecnologias foi primordial para esse quesito. No entanto, aproveitamos o decorrer do projeto e temos certeza de que evoluímos bastante.
                </p>
                <h1>Quem Somos?</h1>
                <section>
                    <LuanProfile />
                    <hr />
                    <KaioProfile />
                    <hr />
                </section>
                <a className="contact" onClick={() => router.push('/contato')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                    <h4>Entre em Contato.</h4>
                </a>
            </Container>
        </>
    )
}
