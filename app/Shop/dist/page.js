'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./shop.css");
var Group__2__png_1 = require("../../public/Group (2).png");
var react_1 = require("react");
var Cross_12px_png_1 = require("../../public/Cross 12px.png");
var image_1 = require("next/image");
var Cart_1 = require("../components/addToCart/Cart");
var Add_To_Cart_png_1 = require("../../public/Add To Cart.png");
var Add_To_Cart__1__png_1 = require("../../public/Add To Cart (1).png");
function About() {
    var _a = react_1.useState(''), category = _a[0], setCategory = _a[1];
    var _b = react_1.useState(''), price = _b[0], setPrice = _b[1];
    var _c = react_1.useState([]), fruits = _c[0], setFruits = _c[1];
    var _d = react_1.useState([]), vegetables = _d[0], setVegetables = _d[1];
    var _e = Cart_1.useCart(), cart = _e.cart, setCart = _e.setCart;
    // TIMER IS HERE
    var _f = react_1.useState({
        days: 0,
        hours: 2,
        minutes: 18,
        seconds: 46
    }), time = _f[0], setTime = _f[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setTime(function (prev) {
                var days = prev.days, hours = prev.hours, minutes = prev.minutes, seconds = prev.seconds;
                if (seconds > 0) {
                    seconds--;
                }
                else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    }
                    else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        }
                        else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                }
                return { days: days, hours: hours, minutes: minutes, seconds: seconds };
            });
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    react_1.useEffect(function () {
        fetch('/api/products')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setFruits(data.fruits);
            setVegetables(data.vegetables);
        })["catch"](function (err) { return console.error(err); });
    }, []);
    // category 
    var displayedProducts = category === 'fruits' ? fruits :
        category === 'vegetables' ? vegetables : __spreadArrays(fruits, vegetables);
    // price
    var filteredProducts = displayedProducts.filter(function (product) {
        if (!price)
            return true;
        if (price === "10$ - 20$")
            return product.price >= 10 && product.price <= 20;
        if (price === "30$ - 40$")
            return product.price >= 30 && product.price <= 40;
        return true;
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'discount' },
            React.createElement("div", { className: 'countainer count' },
                React.createElement("h4", null, "Best Deals"),
                React.createElement("h2", null, "Sale of the Month"),
                React.createElement("div", { className: 'times flex' },
                    React.createElement("div", { className: 'timer' },
                        React.createElement("h3", null, String(time.days).padStart(2, "0")),
                        React.createElement("p", null, ":"),
                        React.createElement("p", null, "Days")),
                    React.createElement("div", { className: 'timer' },
                        React.createElement("h3", null, String(time.hours).padStart(2, "0")),
                        React.createElement("p", null, ":"),
                        React.createElement("p", null, "Hours")),
                    React.createElement("div", { className: 'timer' },
                        React.createElement("h3", null, String(time.minutes).padStart(2, "0")),
                        React.createElement("p", null, ":"),
                        React.createElement("p", null, "Mins")),
                    React.createElement("div", { className: 'time' },
                        React.createElement("h3", null, String(time.seconds).padStart(2, "0")),
                        React.createElement("p", null, "Secs"))),
                React.createElement("div", { className: 'shop1' },
                    React.createElement("div", { className: 'shop' },
                        React.createElement("button", { onClick: function () {
                                var element = document.getElementById("products");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            } }, " Shop Now "),
                        React.createElement(image_1["default"], { src: Group__2__png_1["default"], alt: "" }))))),
        React.createElement("section", { className: 'filter' },
            React.createElement("div", { className: 'countainer things' },
                React.createElement("div", null,
                    React.createElement("select", { value: category, onChange: function (e) { return setCategory(e.target.value); } },
                        React.createElement("option", { value: "", disabled: true }, "Select Category"),
                        React.createElement("option", { value: "fruits" }, "Fruits"),
                        React.createElement("option", { value: "vegetables" }, "Vegetables"))),
                React.createElement("div", null,
                    React.createElement("select", { value: price, onChange: function (e) { return setPrice(e.target.value); } },
                        React.createElement("option", { value: "", disabled: true }, "Select Price (min - max)"),
                        React.createElement("option", { value: "10$ - 20$" }, "10$ - 20$"),
                        React.createElement("option", { value: "30$ - 40$" }, "30$ - 40$")))),
            React.createElement("section", { className: 'all-filter' },
                React.createElement("div", { className: 'filtered countainer' },
                    React.createElement("div", { className: 'flex gap-10' },
                        React.createElement("h3", null, "Active Filters: "),
                        category && (React.createElement("div", { className: 'flex gap-5 name', onClick: function () { return setCategory(''); } },
                            React.createElement("h4", null, category),
                            React.createElement(image_1["default"], { src: Cross_12px_png_1["default"], alt: "" }))),
                        price && (React.createElement("div", { className: 'flex gap-5 name', onClick: function () { return setPrice(''); } },
                            React.createElement("h4", null, price),
                            React.createElement(image_1["default"], { src: Cross_12px_png_1["default"], alt: "" })))),
                    React.createElement("div", null,
                        React.createElement("h4", null,
                            filteredProducts.length,
                            " ",
                            React.createElement("span", null, "Results found.")))))),
        React.createElement("section", { className: 'pro', id: 'products' },
            React.createElement("div", { className: 'countainer flex' },
                React.createElement("div", { className: 'products' }, filteredProducts.map(function (item) { return (React.createElement("div", { className: 'product', key: item.id },
                    item.image && React.createElement(image_1["default"], { src: item.image, alt: item.name, width: 300, height: 120 }),
                    React.createElement("h4", null, item.name),
                    React.createElement("div", { className: 'flex justify-between' },
                        React.createElement("div", { className: 'price' },
                            React.createElement("p", { className: 'one' },
                                "$",
                                item.price),
                            React.createElement("p", { className: 'two' },
                                "$",
                                (item.price * item.sale).toFixed(2))),
                        React.createElement("div", null,
                            React.createElement("button", { className: "add-to-cart cursor-pointer " + (cart.some(function (p) { return p.id === item.id; }) ? 'added' : ''), onClick: function () {
                                    if (cart.some(function (p) { return p.id === item.id; })) {
                                        setCart(function (prev) { return prev.filter(function (p) { return p.id !== item.id; }); });
                                    }
                                    else {
                                        setCart(function (prev) { return __spreadArrays(prev, [item]); });
                                    }
                                } },
                                React.createElement(image_1["default"], { src: cart.some(function (p) { return p.id === item.id; }) ? Add_To_Cart__1__png_1["default"] : Add_To_Cart_png_1["default"], alt: "cart" })))))); }))))));
}
exports["default"] = About;
