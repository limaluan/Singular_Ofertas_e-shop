import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { IProductsProps } from "./useProducts";

interface ICartPropsProvider {
    children: ReactNode;
}

interface IProductsProps2 extends IProductsProps {
    ammount: number;
}

interface ICartContextData {
    productsOnCart: IProductsProps[];
    productsOnCart2: IProductsProps2[];
    addProductToCart: (cod_product: string) => Promise<any>;
    removeProductCart: (cod_product: string) => Promise<any>;
}

const CartContext = createContext({} as ICartContextData);

export function CartProvider({ children }: ICartPropsProvider) {
    const [productsOnCart, setProductsOnCart] = useState([]);
    const [productsOnCart2, setProductsOnCart2] = useState<IProductsProps2[]>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getCartProducts();
    }, [user, productsOnCart2]);

    const getCartProducts = async () => {
        await api.get(`/v1/cart/${user?.email}`).then(response => {
            setProductsOnCart(response.data.products_info);
        })
        const newProductsOnCart = [];
        productsOnCart.forEach(product => {
            let ammount = productsOnCart.filter((productCart => productCart.cod_product === product.cod_product)).length;
            const newProduct = Object.assign(product, {
                ammount
            })

            const productAlreadyExists = newProductsOnCart.find(productOnCart => productOnCart.cod_product === product.cod_product);
            if (!productAlreadyExists) {
                newProductsOnCart.push(newProduct);
                setProductsOnCart2(newProductsOnCart);
            }
        });
    }

    const addProductToCart = async (cod_product: string) => {
        await api.post(`/v1/cart/`, {
            products_cart: cod_product,
            email: user?.email,
        });

        return getCartProducts();
    }

    const removeProductCart = async (cod_product: string) => {
        await api.delete('/v1/cart', {
            data: {
                products_cart: cod_product,
                email: user?.email,
            }
        });

        return getCartProducts();
    }

    return (
        <CartContext.Provider value={{ addProductToCart, removeProductCart, productsOnCart, productsOnCart2 }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): ICartContextData {
    const context = useContext(CartContext);

    return context;
}
