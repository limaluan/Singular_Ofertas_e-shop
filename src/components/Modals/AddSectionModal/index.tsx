import ReactModal from "react-modal";

interface IAddSectionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function AddSectionModal({ isOpen, onRequestClose }: IAddSectionModalProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="content"
            overlayClassName="overlay"
            appElement={document.getElementById('root') || undefined}
        >
            <form>
                <input type="text" placeholder="Teste" />
            </form>
        </ReactModal>
    );
}
