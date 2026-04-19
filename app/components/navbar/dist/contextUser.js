'use client';
"use strict";
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = react_1.createContext();
function AuthProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(null), user = _b[0], setUser = _b[1];
    var login = function (data) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    };
    var logout = function () {
        setUser(null);
        localStorage.removeItem('user');
    };
    return (React.createElement(AuthContext.Provider, { value: { user: user, login: login, logout: logout } }, children));
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    return react_1.useContext(AuthContext);
}
exports.useAuth = useAuth;
