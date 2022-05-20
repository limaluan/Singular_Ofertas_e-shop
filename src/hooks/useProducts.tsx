import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IProductsProviderProps {
    children: ReactNode;
}

interface IProductsProps {
    cod_product: string;
    name_product: string;
    description: string;
    price: string;
    image: string;
}

interface IProductsContextData {
    products: IProductsProps[];
    deleteProduct: (cod_product: string) => any;
}

const ProductContext = createContext({} as IProductsContextData);

export function ProductsProvider({ children }: IProductsProviderProps) {
    const [products, setProducts] = useState<IProductsProps[]>([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await api.get('/v1/product').then(response => {
            setProducts(response.data);;
        });
        return response;
    };

    const deleteProduct = async (cod_product: string) => {
        const response = await api.delete(`/v1/product/${cod_product}`);
        getAllProducts();
        return response;
    };

    return (
        <ProductContext.Provider
            value={{ products, deleteProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts(): IProductsContextData {
    const context = useContext(ProductContext);

    return context;
}
