import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Container from './styles';
import Carousel from 'react-elastic-carousel';

import { IProductsProps } from "../../hooks/useProducts";
// interface ISectionProps {
//     id_section: string,
//     name_section: string,
//     info_products: IProductsProps[],
// }

export default function Sections() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
    ]

    const [sections, setSections] = useState([]);

    useEffect(() => {
        api.get('/v1/section').then(response => setSections(response.data));
        return console.log(sections);
    }, []);

    return (
        <Container>
            {sections
                ? sections.map(section => (
                    <section className='products-section' key={section.id_section}>
                        <h2>{section.name_section}</h2>
                        <Carousel breakPoints={breakPoints}>
                            {section.info_products.map((product) => (
                                <article className="item" key={product.cod_product}>
                                    <img src={product.image} alt={product.description} />
                                    <h3>{product.name_product}</h3>
                                    <h4>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(parseFloat(product.price))}</h4>
                                    <button>Adicionar ao Carrinho</button>
                                </article>
                            ))}
                        </Carousel>
                    </section>
                ))
                : <></>}
        </Container>
    )
}
