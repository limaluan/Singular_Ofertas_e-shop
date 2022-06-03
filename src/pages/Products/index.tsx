import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useProducts } from "../../hooks/useProducts";
import AddProductModal from "../../components/Modals/AddProductModal";
import { SectionBody, ProductsSection, Item, AddProduct } from "./styles"

export default function Products() {
    const { products, deleteProduct } = useProducts();
    const { user } = useContext(AuthContext);

    const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);

    const handleCloseAddProductModal = () => {
        setAddProductModalOpen(false);
        console.log(`Debug of handleClose isModalOpen: ${isAddProductModalOpen}`);
    };

    const handleOpenAddProductModal = () => {
        if (!isAddProductModalOpen) {
            setAddProductModalOpen(true);
            console.log(`Debug of handleOpen isModalOpen: ${isAddProductModalOpen}`);
        }
    };

    if (products.length === 0) {
        return (
            <SectionBody>
                <h2>Não há produtos cadastrados.</h2>
            </SectionBody>
        );
    }

    return (
        // Se possível isolar esse componente apenas para adms
        <SectionBody>
            <h2>Todos os Produtos</h2>
            <ProductsSection>
                {user?.admin

                    ? <AddProduct onClick={handleOpenAddProductModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>
                        <h2>Adicionar Produto</h2>
                        <AddProductModal
                            isOpen={isAddProductModalOpen}
                            onRequestClose={handleCloseAddProductModal}
                        />
                    </AddProduct>

                    : <></>
                }
                {products.map(product => (
                    <Item key={product.cod_product}>
                        {user?.admin
                            ? <svg onClick={() => deleteProduct(product.cod_product)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" /></svg>
                            : <></>
                        }
                        <img src={product.image} alt={product.description} />
                        <div>
                            <h2>{product.name_product}</h2>
                            <h3>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(parseFloat(product.price))}</h3>
                        </div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z" /></svg>
                            Adicionar ao Carrinho
                        </button>
                    </Item>
                ))};
            </ProductsSection>
        </SectionBody>
    )
}
