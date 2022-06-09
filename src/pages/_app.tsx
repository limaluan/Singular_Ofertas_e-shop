import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import Header from '../components/Header';
import { ProductsProvider } from '../hooks/useProducts';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ProductsProvider>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </ProductsProvider>
    );
}

export default MyApp;
