"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from "react";
import { useAuth } from "../navbar/AuthContext";

type Product = {
    id: number;
    name: string;
    price: number;
    sale: number;
    image: string;
    quantity: number;
};

interface CartContextType {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const getCartKey = (uid?: string) => `cart_${uid}`;

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);
    const { user } = useAuth();

    // load cart per user
    useEffect(() => {
        if (!user?.uid) return;

        const savedCart = localStorage.getItem(getCartKey(user.uid));

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        } else {
            setCart([]);
        }
    }, [user]);

    // save cart per user
    useEffect(() => {
        if (!user?.uid) return;

        localStorage.setItem(
            getCartKey(user.uid),
            JSON.stringify(cart)
        );
    }, [cart, user]);

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