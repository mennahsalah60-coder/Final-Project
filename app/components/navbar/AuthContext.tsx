'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type User = {
    uid: string;
    firstName?: string;
    lastName?: string;
    email: string | null;
    password?: string;
    phone?: string;
    Company?: string;
    Address?: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (data: User) => void;
    logout: () => void;
    updateUser: (data: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Load user once
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (savedUser && isLoggedIn === "true") {
            setUser(JSON.parse(savedUser));
        } else {
            setUser(null);
        }

        setLoading(false);
    }, []);
    // login
    const login = (data: User) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "true");
    };

    // logout (NOT deleting data)
    const logout = () => {
        setUser(null);
        localStorage.setItem("isLoggedIn", "false");
    };

    // update user safely
    const updateUser = (newData: Partial<User>) => {
        setUser((prev) => {
            if (!prev) return prev;

            const updated = { ...prev, ...newData };

            localStorage.setItem("user", JSON.stringify(updated));

            return updated;
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}