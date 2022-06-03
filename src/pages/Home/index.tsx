import { Container } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AddSectionModal from "../../components/Modals/AddSectionModal";

export default function Home() {
    const { user } = useContext(AuthContext);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [banner, setBanner] = useState('https://i.imgur.com/UkxJSEC.png');
    
    const handleCloseModal = () => {
        return setIsModalOpen(false);
    }
    
    return (
        <Container>
            <section>
                <img src={banner}
                    loading='lazy'
                    alt="Banner Promoção"
                />
                {
                    user?.admin
                        ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z" /></svg>
                        : <></>
                }
            </section>
            {user?.admin
                ? <section>
                    <button onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" /></svg>
                        <h2>Adicionar Seção</h2>
                    </button>
                </section>
                : <></>
            }
            <AddSectionModal 
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
            />
        </Container>
    )
}
