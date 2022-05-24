import { FormEvent, useState } from 'react';
import ReactModal from 'react-modal';
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

        if (!image || !name || !description || !price) {
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
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <form onSubmit={handleSubmit}>
                <svg onClick={() => onRequestClose()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
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
        </ReactModal>
    );
}