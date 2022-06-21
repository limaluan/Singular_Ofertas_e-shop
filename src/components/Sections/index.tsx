import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Container from './styles';

interface ISectionProps {
    sectionId: string,
    sectionName: string,
    productsId: [],
}

export default function Sections() {
    const [sections, setSections] = useState<ISectionProps[]>([]);

    useEffect(() => {
        api.get('/v1/section').then(response => setSections(response.data));
    }, []);

    return (
        <>
            {sections.map(section => (
                <Container key={section.sectionId}>
                    <h2>{section.sectionName}</h2>

                </Container>
            ))}
        </>
    )
}
