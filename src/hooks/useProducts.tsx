import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IProductsPropsProvider {
    children: ReactNode;
}

export interface IProductsProps {
    cod_product: string;
    name_product: string;
    description: string;
    price: string;
    image: string;
}

interface IProductsContextData {
    products: IProductsProps[];
    deleteProduct: (cod_product: string) => any;
    addProduct: (description: string, image: string, name_product: string, price: string) => any;
}

const ProductContext = createContext({} as IProductsContextData);

export function ProductsProvider({ children }: IProductsPropsProvider) {
    const [products, setProducts] = useState<IProductsProps[]>([]);

    useEffect((): any => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const productsResponse = await api.get('/v1/product');
        return setProducts(productsResponse.data);
    }

    const deleteProduct = async (cod_product: string) => {
        await api.delete(`/v1/product/${cod_product}`);
        return getAllProducts();
    }

    const addProduct = async (description: string, image: string, name_product: string, price: string) => {
        await api.post('/v1/product', {
            name_product,
            description,
            price,
            image
        });

        return getAllProducts();
    }

    return (
        <ProductContext.Provider value={{ products, deleteProduct, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts(): IProductsContextData {
    const context = useContext(ProductContext);

    return context;
}
