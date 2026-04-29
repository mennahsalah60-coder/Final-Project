'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
    uid: string;
    email: string | null;
    firstName?: string;
    lastName?: string;
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

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        const profile = localStorage.getItem("profile");

        if (auth) {
            const authData = JSON.parse(auth);
            const profileData = profile ? JSON.parse(profile) : {};

            setUser({
                ...authData,
                ...profileData,
            });
        }

        setLoading(false);
    }, []);

    const login = (data: User) => {
        const savedProfile = JSON.parse(localStorage.getItem("profile") || "{}");

        const authData = {
            uid: data.uid,
            email: data.email,
        };

        const mergedUser = {
            ...savedProfile,
            ...data,
        };

        setUser(mergedUser);

        localStorage.setItem("auth", JSON.stringify(authData));
        localStorage.setItem("profile", JSON.stringify(mergedUser));
        localStorage.setItem("isLoggedIn", "true");
    };


    const logout = () => {
        setUser(null);

        localStorage.removeItem("auth");
        localStorage.removeItem("isLoggedIn");
    }

    const updateUser = (data: Partial<User>) => {
        setUser((prev) => {
            if (!prev) return prev;

            const updated = { ...prev, ...data };

            const profileData = {
                firstName: updated.firstName,
                lastName: updated.lastName,
                phone: updated.phone,
                Company: updated.Company,
                Address: updated.Address,
            };

            localStorage.setItem("profile", JSON.stringify(profileData));

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
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
}