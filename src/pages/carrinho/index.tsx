import Head from 'next/head';
import { useCart } from '../../hooks/useCart';
import Container from './styles';

export default function Carrinho() {
    const { productsOnCart } = useCart();

    return (
        <Container>
            <Head>
                <title>Carrinho | Singular</title>
            </Head>
            <h2>Seu Carrinho</h2>
            <ul>
                {productsOnCart.map(product => (
                    <>
                        <li key={product.cod_product}>
                            <img src={product.image} alt="" />
                            <div>
                                <h2>{product.name_product}</h2>
                                <h3>Quantidade: 3</h3>
                            </div>
                        </li>
                        <hr />
                    </>
                ))}
            </ul>
            <button>
                
                Finalizar Compra
            </button>
        </Container>
    )
}
