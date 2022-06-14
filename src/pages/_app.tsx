import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import Header from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';
import { ProductsProvider } from '../hooks/useProducts';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ProductsProvider>
                <Header />
                <Component {...pageProps} />
                <GlobalStyle />
            </ProductsProvider>
        </AuthProvider>
    );
}

export default MyApp;
