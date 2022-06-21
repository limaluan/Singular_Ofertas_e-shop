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
    // deleteProduct: (cod_product: string) => any;
    // addProduct: ({ description, image, name_product, price }: IAddProductsProps) => any;
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

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts(): IProductsContextData {
    const context = useContext(ProductContext);

    return context;
}
