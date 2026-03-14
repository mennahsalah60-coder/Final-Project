"use strict";
exports.__esModule = true;
require("./footer.css");
var image_1 = require("next/image");
var Logo__1__png_1 = require("../../../public/Logo (1).png");
var link_1 = require("next/link");
var Method_ApplePay_png_1 = require("../../../public/Method=ApplePay.png");
var Method_Visa_png_1 = require("../../../public/Method=Visa.png");
var Method_Discover_png_1 = require("../../../public/Method=Discover.png");
var Method_Mastercard_png_1 = require("../../../public/Method=Mastercard.png");
var Cart_png_1 = require("../../../public/Cart.png");
function Footer() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "footer" },
            React.createElement("div", { className: 'countainer sub' },
                React.createElement("div", null,
                    React.createElement("h2", null, "Subcribe our Newsletter"),
                    React.createElement("p", null, "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.")),
                React.createElement("div", { className: 'email' },
                    React.createElement("div", null,
                        React.createElement("input", { type: "email", placeholder: 'Your email addresss' }),
                        React.createElement("button", null, "Subscribe"))))),
        React.createElement("footer", null,
            React.createElement("div", { className: 'countainer' },
                React.createElement("div", { className: 'footer-logo' },
                    React.createElement("div", null,
                        React.createElement(image_1["default"], { src: Logo__1__png_1["default"], alt: "" }),
                        React.createElement("p", { className: 'long' }, "Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec."),
                        React.createElement("div", { className: 'call flex gap-4' },
                            React.createElement("p", null, "(219) 555-0114"),
                            React.createElement("p", { className: 'or' }, "or"),
                            React.createElement("p", null, "Proxy@gmail.com"))),
                    React.createElement("div", { className: 'link flex gap-15' },
                        React.createElement("div", { className: 'links' },
                            React.createElement("h2", null, "My Account"),
                            React.createElement(link_1["default"], { href: '#' }, "My Account"),
                            React.createElement(link_1["default"], { href: '#' }, "Order History"),
                            React.createElement(link_1["default"], { href: '#' }, "Shoping Cart"),
                            React.createElement(link_1["default"], { href: '#' }, "Wishlist")),
                        React.createElement("div", { className: 'links' },
                            React.createElement("h2", null, "Helps"),
                            React.createElement("p", null, "Contact"),
                            React.createElement("p", null, "Faqs"),
                            React.createElement("p", null, "Terms & Condition"),
                            React.createElement("p", null, "Privacy Policy")),
                        React.createElement("div", { className: 'links' },
                            React.createElement("h2", null, "Proxy"),
                            React.createElement(link_1["default"], { href: '#' }, "About"),
                            React.createElement(link_1["default"], { href: '/Shop' }, "Shop"),
                            React.createElement(link_1["default"], { href: '#' }, "Product"),
                            React.createElement(link_1["default"], { href: '#' }, "Track Order")),
                        React.createElement("div", { className: 'links' },
                            React.createElement("h2", null, "Categories"),
                            React.createElement("p", null, "Fruit & Vegetables"),
                            React.createElement("p", null, "Meat & Fish"),
                            React.createElement("p", null, "Bread & Bakery"),
                            React.createElement("p", null, "Beauty & Health")))),
                React.createElement("div", { className: 'money' },
                    React.createElement("p", null, "Ecobazar eCommerce \u00A9 2026. All Rights Reserved"),
                    React.createElement("div", null,
                        React.createElement(image_1["default"], { src: Method_ApplePay_png_1["default"], alt: "" }),
                        React.createElement(image_1["default"], { src: Method_Visa_png_1["default"], alt: "" }),
                        React.createElement(image_1["default"], { src: Method_Discover_png_1["default"], alt: "" }),
                        React.createElement(image_1["default"], { src: Method_Mastercard_png_1["default"], alt: "" }),
                        React.createElement(image_1["default"], { src: Cart_png_1["default"], alt: "" })))))));
}
exports["default"] = Footer;
