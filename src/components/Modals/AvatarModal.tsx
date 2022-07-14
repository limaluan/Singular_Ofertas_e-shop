import Modal from 'react-modal';
import { FormEvent, useContext, useState } from "react";
import { api } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

interface ILoginModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function AvatarModal({ isOpen, onRequestClose }: ILoginModalProps) {
    const [imgUrl, setImgUrl] = useState('');

    const { user } = useContext(AuthContext);

    const handleChangeAvatar = async (e: FormEvent) => {
        e.preventDefault();

        const response = await api.patch("/v1/avatar", {
            email: user.email,
            avatar: imgUrl,
        })

        return window.location.reload();
    }

    Modal.setAppElement("#__next")
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
        >
            <img
                src="./singular_icon.png"
                alt="Singular Logo"
                className='singularLogo' />
            <form onSubmit={handleChangeAvatar}>
                <input type="text" placeholder='Url da Imagem'
                    value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}
                />
                <button type='submit'>Alterar</button>
            </form>
        </Modal>
    )
}
