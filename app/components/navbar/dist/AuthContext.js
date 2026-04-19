'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = react_1.createContext(null);
function AuthProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(null), user = _b[0], setUser = _b[1];
    var _c = react_1.useState(true), loading = _c[0], setLoading = _c[1];
    react_1.useEffect(function () {
        try {
            var savedUser = localStorage.getItem("user");
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        }
        catch (error) {
            console.log("Error loading user:", error);
        }
        finally {
            setLoading(false);
        }
    }, []);
    var login = function (data) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
    };
    var logout = function () {
        setUser(null);
        localStorage.removeItem("user");
    };
    var updateUser = function (newData) {
        setUser(function (prev) {
            if (!prev)
                return prev;
            var updatedUser = __assign(__assign({}, prev), newData);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            return updatedUser;
        });
    };
    return (React.createElement(AuthContext.Provider, { value: { user: user, login: login, logout: logout, updateUser: updateUser, loading: loading } }, children));
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    var context = react_1.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}
exports.useAuth = useAuth;
