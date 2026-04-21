"use client";
"use strict";
exports.__esModule = true;
exports.useCart = exports.CartProvider = void 0;
var react_1 = require("react");
var CartContext = react_1.createContext(undefined);
function CartProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState([]), cart = _b[0], setCart = _b[1];
    return (React.createElement(CartContext.Provider, { value: { cart: cart, setCart: setCart } }, children));
}
exports.CartProvider = CartProvider;
function useCart() {
    var context = react_1.useContext(CartContext);
    if (!context)
        throw new Error("useCart must be inside CartProvider");
    return context;
}
exports.useCart = useCart;
