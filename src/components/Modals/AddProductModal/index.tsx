import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useProducts } from '../../../hooks/useProducts';
import { PreviewProduct } from './styles';

interface IAddProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function AddProductModal({ isOpen, onRequestClose }: IAddProductModalProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const [errorMsg, setErrorMsg] = useState('');;

    const { addProduct } = useProducts();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!image || !name || !description || price) {
            return setErrorMsg('Informações Inválidas');
        }

        await addProduct({
            image: image,
            name_product: name,
            description: description,
            price: price,
        });

        setErrorMsg('');
        return onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome do Produto'
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder='Descrição do Produto'
                    value={description} onChange={(e) => setDescription(e.target.value)}
                />
                <input type="number" step={0.1} placeholder='Preço do Produto'
                    value={price} onChange={(e) => setPrice(e.target.value)}
                />
                <input type="text" placeholder='Imagem do Produto'
                    value={image} onChange={(e) => setImage(e.target.value)}
                />
                <p><b>{errorMsg}</b></p>
                <button type='submit'>Adicionar Produto</button>
            </form>

            <PreviewProduct>
                <h1>Preview</h1>
                {image
                    ? <img src={image} alt="Imagem do Produto" />
                    : <></>
                }
                {name
                    ? <h2>{name}</h2>
                    : <></>
                }
                {price
                    ? <h3>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(parseFloat(price))}</h3>
                    : <></>
                }
            </PreviewProduct>
        </Modal>
    );
}