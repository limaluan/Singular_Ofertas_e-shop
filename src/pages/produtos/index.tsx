import Head from "next/head";
import { useContext, useState } from "react";
import CreateProductModal from "../../components/Modals/CreateProductModal";
import { AuthContext } from "../../contexts/AuthContext";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import Container from "./styles";

export default function Produtos() {
    const [isProductModalOpen, setProductModalOpen] = useState(false);
    const { products } = useProducts();
    const { addProductToCart } = useCart();
    const { user } = useContext(AuthContext);

    const { deleteProduct } = useProducts();

    return (
        <Container>
            <Head>
                <title>Produtos | Singular</title>
            </Head>
            <h2>Confira nossa lista de Produtos!</h2>
            <section>
                {user?.admin
                    ? <div onClick={() => setProductModalOpen(true)} className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" /></svg>
                        <h3>Adicionar Produto</h3>
                    </div>
                    : <></>
                }

                {products.map(product => (
                    <article key={product.cod_product} className="item">
                        {user?.admin
                            ? <svg className="close" onClick={() => deleteProduct(product.cod_product)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                            : <></>
                        }
                        <img src={product.image} alt={product.description} />
                        <h3>{product.name_product}</h3>
                        <h4>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(parseFloat(product.price))}</h4>
                        <button onClick={() => addProductToCart(product.cod_product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z" /></svg>
                            Adicionar ao Carrinho
                        </button>
                    </article>
                ))}
            </section>
            <CreateProductModal
                isOpen={isProductModalOpen}
                onRequestClose={() => setProductModalOpen(false)}
            />
        </Container>
    );
}
