import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Container from './styles';

import { IProductsProps } from "../../hooks/useProducts";
interface ISectionProps {
    id_section: string,
    name_section: string,
    info_products: IProductsProps[],
}

export default function Sections() {
    const [sections, setSections] = useState<ISectionProps[]>([]);

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
                        <div className="products-carousel">
                            {section.info_products.map((product) => (
                                <article className="item" key={product.cod_product}>
                                    <img src={product.image} alt={product.description} />
                                    <h3>{product.name_product}</h3>
                                    <h4>{new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(parseFloat(product.price))}</h4>
                                </article>
                            ))}
                        </div>
                    </section>
                ))
                : <></>}
        </Container>
    )
}
