'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ReactNode } from 'react'

type User = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    current: string;
    confirm: string;
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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("user")

            if (savedUser) {
                setUser(JSON.parse(savedUser))
            }
        } catch (error) {
            console.log("Error loading user:", error)
        } finally {
            setLoading(false)
        }
    }, [])

    const login = (data: User) => {
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    const updateUser = (newData: Partial<User>) => {
    setUser((prev) => {
        if (!prev) return prev;

        const updatedUser = { ...prev, ...newData };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return updatedUser;
    });
};

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    return context
}