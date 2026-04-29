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
        var auth = localStorage.getItem("auth");
        var profile = localStorage.getItem("profile");
        if (auth) {
            var authData = JSON.parse(auth);
            var profileData = profile ? JSON.parse(profile) : {};
            setUser(__assign(__assign({}, authData), profileData));
        }
        setLoading(false);
    }, []);
    var login = function (data) {
        var savedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
        var authData = {
            uid: data.uid,
            email: data.email
        };
        var mergedUser = __assign(__assign({}, savedProfile), data);
        setUser(mergedUser);
        localStorage.setItem("auth", JSON.stringify(authData));
        localStorage.setItem("profile", JSON.stringify(mergedUser));
        localStorage.setItem("isLoggedIn", "true");
    };
    var logout = function () {
        setUser(null);
        localStorage.removeItem("auth");
        localStorage.removeItem("isLoggedIn");
    };
    var updateUser = function (data) {
        setUser(function (prev) {
            if (!prev)
                return prev;
            var updated = __assign(__assign({}, prev), data);
            var profileData = {
                firstName: updated.firstName,
                lastName: updated.lastName,
                phone: updated.phone,
                Company: updated.Company,
                Address: updated.Address
            };
            localStorage.setItem("profile", JSON.stringify(profileData));
            return updated;
        });
    };
    return (React.createElement(AuthContext.Provider, { value: { user: user, login: login, logout: logout, updateUser: updateUser, loading: loading } }, children));
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    var context = react_1.useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used inside AuthProvider");
    return context;
}
exports.useAuth = useAuth;
