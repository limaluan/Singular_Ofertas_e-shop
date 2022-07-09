import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { IProductsProps } from "./useProducts";

interface ICartPropsProvider {
    children: ReactNode;
}

interface ICartContextData {
    productsOnCart: IProductsProps[];
    addProductToCart: (cod_product: string) => Promise<any>;
}

const CartContext = createContext({} as ICartContextData);

export function CartProvider({ children }: ICartPropsProvider) {
    const [productsOnCart, setProductsOnCart] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getCartProducts();
    }, []);

    const getCartProducts = async () => {
        api.get(`/v1/cart/${user?.email}`).then(response => {
            const products = [];
            response.data.products_cart.forEach(async (productCode) => {
                const product = await api.get(`/v1/product/${productCode}`);
                products.push(product.data);
            });
            setProductsOnCart(products);
        })
        console.log(productsOnCart);
    }

    const addProductToCart = async (cod_product: string) => {
        const response = await api.post(`/v1/cart/`, {
            products_cart: cod_product,
            email: user?.email,
        });
    }

    return (
        <CartContext.Provider value={{ addProductToCart, productsOnCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): ICartContextData {
    const context = useContext(CartContext);

    return context;
}
