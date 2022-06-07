import { AppProps } from 'next/app';
import { GlobalStyle } from '../../styles/global';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
}

export default MyApp;
