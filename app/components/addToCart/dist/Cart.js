"use client";
"use strict";
exports.__esModule = true;
exports.useCart = exports.CartProvider = void 0;
var react_1 = require("react");
var AuthContext_1 = require("../navbar/AuthContext");
var CartContext = react_1.createContext(undefined);
var getCartKey = function (uid) { return "cart_" + uid; };
function CartProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState([]), cart = _b[0], setCart = _b[1];
    var user = AuthContext_1.useAuth().user;
    // load cart per user
    react_1.useEffect(function () {
        if (!(user === null || user === void 0 ? void 0 : user.uid))
            return;
        var savedCart = localStorage.getItem(getCartKey(user.uid));
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        else {
            setCart([]);
        }
    }, [user]);
    // save cart per user
    react_1.useEffect(function () {
        if (!(user === null || user === void 0 ? void 0 : user.uid))
            return;
        localStorage.setItem(getCartKey(user.uid), JSON.stringify(cart));
    }, [cart, user]);
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
