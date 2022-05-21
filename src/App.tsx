import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./pages/Admin";
import { ProductsProvider } from "./hooks/useProducts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </ProductsProvider>
        <Footer />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
