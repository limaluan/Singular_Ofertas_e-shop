import { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { changeUserAvatar } from "../../../services/api";
import '../LoginModal/index';

interface IUserAvatarModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function UserAvatarModal({ isOpen, onRequestClose }: IUserAvatarModalProps) {
    const { user } = useContext(AuthContext);
    const [url, setUrl] = useState('');

    async function handleUrlAvatar(event: FormEvent) {
        event.preventDefault();

        if (user?.email) {
            await changeUserAvatar({
                email: user.email,
                avatarUrl: url,
            })
        }

        window.location.reload();
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <form onSubmit={handleUrlAvatar}>
                <input
                    type="text"
                    placeholder="Cole a URL aqui"
                    value={url}
                    onChange={(event) => (setUrl(event.target.value))}
                />
            </form>
        </ReactModal>
    );
}
