import { FormEvent, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { api } from "../../../services/api";

interface IAddSectionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function AddSectionModal({ isOpen, onRequestClose }: IAddSectionModalProps) {
    const [sectionName, setSectionName] = useState('');
    const [codProduct, setCodProduct] = useState('');

    const handleAddSection = async (e: FormEvent) => {
        e.preventDefault();

        const response = await api.post('/v1/section', {
            name_section: sectionName,
            cod_product: codProduct,
        });

        console.log(response.data);
    };

    useEffect(() => {
        api.get('/v1/section/').then(response => {
            console.log(response.data)
            // response.data.forEach((element: any) => {
            //     console.log(element.cod_product);
            // });
        });
    }, []);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <form onSubmit={handleAddSection}>
                <input type="text" placeholder="Nome da Seção" onChange={(e) => setSectionName(e.target.value)} />
                <input type="text" placeholder="Código do produto" onChange={(e) => setCodProduct(e.target.value)} />
                <button type="submit">Adicionar Seção</button>
            </form>
        </ReactModal>
    );
}
