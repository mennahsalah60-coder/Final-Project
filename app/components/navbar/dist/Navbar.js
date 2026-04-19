'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var Map_Pin_png_1 = require("../../../public/Map Pin.png");
var Logo_png_1 = require("../../../public/Logo.png");
var Heart_png_1 = require("../../../public/Heart.png");
var cart_1_svgrepo_com_png_1 = require("../../../public/cart-1-svgrepo-com.png");
var Call_Now_png_1 = require("../../../public/Call Now.png");
var burger_svg_1 = require("../../../public/burger.svg");
var close_svg_1 = require("../../../public/close.svg");
require("./navbar.css");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Cart_1 = require("../addToCart/Cart");
var AuthContext_1 = require("./AuthContext");
var navigation_2 = require("next/navigation");
function Navbar() {
    var _a = react_1.useState(false), isAdd = _a[0], setIsAdd = _a[1];
    var pathname = navigation_1.usePathname();
    var cart = Cart_1.useCart().cart;
    var _b = AuthContext_1.useAuth(), user = _b.user, logout = _b.logout;
    var router = navigation_2.useRouter();
    var firstName = (user === null || user === void 0 ? void 0 : user.firstName) ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
        : "";
    var handleLogout = function () {
        logout();
        router.push("/home");
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'location-sec' },
            React.createElement("div", { className: 'countainer location items-center' },
                React.createElement("div", { className: 'map' },
                    React.createElement(image_1["default"], { src: Map_Pin_png_1["default"], alt: "" }),
                    React.createElement("p", null, "Store Location: Lincoln- 344, Illinois, Chicago, USA")),
                React.createElement("div", { className: 'det' },
                    React.createElement("p", null, "Eng"),
                    React.createElement("p", null, "USD"),
                    !user ? (React.createElement(React.Fragment, null,
                        React.createElement(link_1["default"], { href: "/signin" }, "Sign in"),
                        React.createElement("p", null, "/"),
                        React.createElement(link_1["default"], { href: "/signup" }, "Sign up"))) : (React.createElement(React.Fragment, null,
                        React.createElement(link_1["default"], { className: 'account', href: "/profile" },
                            "Your Account ",
                            firstName),
                        React.createElement("button", { onClick: function () {
                                logout();
                                handleLogout();
                                alert("You have been logged out successfully");
                            } }, "Logout")))))),
        React.createElement("section", { className: 'logo-sec' },
            React.createElement("div", { className: 'countainer logo' },
                React.createElement("div", null,
                    React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "" })),
                React.createElement("div", { className: 'all' },
                    React.createElement("div", { className: 'w-7', onClick: function () { return setIsAdd(function (prev) { return !prev; }); } },
                        React.createElement(image_1["default"], { className: 'burger', src: isAdd ? close_svg_1["default"] : burger_svg_1["default"], alt: "menu toggle" })),
                    React.createElement("ul", { className: "menu " + (isAdd ? 'active' : '') },
                        React.createElement("div", null,
                            React.createElement(link_1["default"], { href: "/signin" }, "Sign in / "),
                            React.createElement(link_1["default"], { href: "/signup" }, " Sign Up")),
                        React.createElement(link_1["default"], { href: '/home', className: pathname === "/" ? "active" : "" }, "Home"),
                        React.createElement(link_1["default"], { href: "/Shop", className: pathname === "/Shop" ? "active" : "" }, "Shop"),
                        React.createElement(link_1["default"], { href: '/blog', className: pathname === "/blog" ? "active" : "" }, "Blog"),
                        React.createElement(link_1["default"], { href: '/about', className: pathname === "/about" ? "active" : "" }, "About Us"),
                        React.createElement(link_1["default"], { href: '/contact', className: pathname === "/contact" ? "active" : "" }, "Contact Us"),
                        React.createElement("p", null, "Eng"),
                        React.createElement("p", null, "USD"))),
                React.createElement("div", { className: 'search' },
                    React.createElement("input", { type: "text", 
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        placeholder: 'Search' }),
                    React.createElement("div", null,
                        React.createElement("button", { className: '' }, "Search"))),
                React.createElement("div", { className: 'fav' },
                    React.createElement(image_1["default"], { className: 'heart', src: Heart_png_1["default"], alt: "" }),
                    "|",
                    React.createElement("div", null,
                        React.createElement(image_1["default"], { src: cart_1_svgrepo_com_png_1["default"], alt: "" }),
                        React.createElement("div", null,
                            React.createElement("p", { className: 'counter' }, cart.length),
                            React.createElement("p", null, "Shopping cart:"),
                            React.createElement("p", null, "00$")))))),
        React.createElement("nav", null,
            React.createElement("div", { className: 'navbar countainer' },
                React.createElement("div", { className: 'links' },
                    React.createElement(link_1["default"], { href: '/home', className: pathname === "/home" ? "active" : "" }, "Home"),
                    React.createElement(link_1["default"], { href: "/Shop", className: pathname === "/Shop" ? "active" : "" }, "Shop"),
                    React.createElement(link_1["default"], { href: '/blog', className: pathname === "/blog" ? "active" : "" }, "Blog"),
                    React.createElement(link_1["default"], { href: '/about', className: pathname === "/about" ? "active" : "" }, "About Us"),
                    React.createElement(link_1["default"], { href: '/contact', className: pathname === "/contact" ? "active" : "" }, "Contact Us")),
                React.createElement("div", null,
                    React.createElement(image_1["default"], { src: Call_Now_png_1["default"], alt: '' }))))));
}
exports["default"] = Navbar;
