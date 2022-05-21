import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useProducts } from "../../hooks/useProducts";
import AddProductModal from "../Modals/AddProductModal";
import { SectionBody, Products, Item, AddProduct } from "./styles"

interface ISectionProps {
    title?: string;
}

export default function Section(props: ISectionProps) {
    const { products, deleteProduct } = useProducts();
    const { user } = useContext(AuthContext);

    const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);

    const handleCloseAddProductModal = () => {
        setAddProductModalOpen(false);
    };

    const handleOpenAddProductModal = () => {
        setAddProductModalOpen(true);
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
            <h2>{props.title || 'Produtos'}</h2>
            <Products>
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
                    </Item>
                ))}
                {user?.admin
                
                    ? <AddProduct onClick={handleOpenAddProductModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
                        <h2>Adicionar Produto</h2>
                        <AddProductModal
                            isOpen={isAddProductModalOpen}
                            onRequestClose={handleCloseAddProductModal}
                        />
                    </AddProduct>
                    
                    : <></>
                }

            </Products>
        </SectionBody>
    )
}
