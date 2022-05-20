import { useContext } from "react";
import Section from "../../components/Section";
import { AuthContext } from "../../contexts/AuthContext";
import { AdminActionsPanel, Container } from "./styles";

export default function AdminPage() {
    const { user } = useContext(AuthContext);

    if (!user?.admin) {
        return (
            <Container>
                <h1>Página não encontrada.</h1>
            </Container>
        );
    };

    return (
        <Container>
            {/* <AdminActionsPanel>
                <h1>Painel de administração</h1>
            </AdminActionsPanel> */}
            <Section title="Todos os produtos" />
        </Container>
    );
}