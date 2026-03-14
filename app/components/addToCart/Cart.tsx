"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    sale: number;
    image: string;
};


interface CartContextType {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>; //funcrion
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be inside CartProvider");
    return context;
}