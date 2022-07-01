import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IProductsProps, useProducts } from '../../../hooks/useProducts';
import { api } from '../../../services/api';

interface AddSectionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export default function AddSectionModal({ isOpen, onRequestClose }: AddSectionModalProps) {
    const [sectionName, setSectionName] = useState('');

    const [productsCodeToAdd, setProductsCodeToAdd] = useState([]);
    const [productsOnSection, setProductsOnSection] = useState<IProductsProps[]>([]);
    const [productsAvailable, setProductsAvailable] = useState<IProductsProps[]>([]);

    const { products } = useProducts();

    useEffect(() => {
        setProductsAvailable(products);
    }, [isOpen]);

    const handleAddProductToSection = (_event: any, key: number) => {
        const product = productsAvailable[key];
        const newProductsAvailable = productsAvailable.filter((currentProduct) => (
            currentProduct.cod_product !== product.cod_product
        ));
        productsOnSection.push(product);
        productsCodeToAdd.push(product.cod_product);

        setProductsOnSection(productsOnSection);
        setProductsAvailable(newProductsAvailable);
    }

    const handleRemoveProductOfSection = (_event: any, key: number) => {
        const product = productsOnSection[key];
        const newProductsOnSection = productsOnSection.filter((currentProduct) => (
            currentProduct.cod_product !== product.cod_product
        ));

        const newProductsCodeToAdd = [];
        newProductsOnSection.forEach((products) => {
            newProductsCodeToAdd.push(products.cod_product);
        });

        productsAvailable.push(product);

        setProductsOnSection(newProductsOnSection);
        setProductsAvailable(productsAvailable);
        return setProductsCodeToAdd(newProductsCodeToAdd);
    }

    const handleCreateSection = async (e: FormEvent) => {
        e.preventDefault();

        await api.post('/v1/section', {
            section_name: sectionName,
            product_id: productsCodeToAdd.toString().replace('[]', ''),
        })

        setSectionName('');
        setProductsAvailable(products);
        setProductsCodeToAdd([]);
        setProductsOnSection([]);
        return onRequestClose();
    }

    Modal.setAppElement("#__next")
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
        >
            <svg onClick={onRequestClose} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#A8A8B3" />
            </svg>
            <h3>Criar Seção</h3>
            <form onSubmit={handleCreateSection}>
                <input type="text" placeholder='Nome da Seção'
                    value={sectionName} onChange={(e) => setSectionName(e.target.value)}
                />
                {productsOnSection.length === 0
                    ? <h3>Ainda não há produtos nesta seção</h3>
                    : <div className='products-available'>
                        {productsOnSection.map((product, key) => (
                            <article className="item" key={product.cod_product}
                                onClick={event => handleRemoveProductOfSection(event, key)}
                            >
                                <img src={product.image} alt={product.description} loading="lazy" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" /></svg>
                                <h3>{product.name_product}</h3>
                                <h4>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(parseFloat(product.price))}</h4>
                            </article>
                        ))}
                    </div>
                }
                <h3>Produtos Disponíveis</h3>
                <div className='products-available'>
                    {productsAvailable.map((product, key) => (
                        <article className="item" key={product.name_product}
                            onClick={event => handleAddProductToSection(event, key)}
                        >
                            <img src={product.image} alt={product.description} loading="lazy" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z" /></svg>
                            <h3>{product.name_product}</h3>
                            <h4>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(parseFloat(product.price))}</h4>
                        </article>
                    ))}
                </div>
                <button type='submit'>Criar Seção</button>
            </form>
        </Modal>
    )
}
