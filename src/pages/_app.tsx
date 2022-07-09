import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../hooks/useCart';
import { ProductsProvider } from '../hooks/useProducts';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ProductsProvider>
                <CartProvider>
                    <Header />
                    <Component {...pageProps} />
                    <GlobalStyle />
                </CartProvider>
            </ProductsProvider>
            <Footer />
        </AuthProvider>
    );
}

export default MyApp;
