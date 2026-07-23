'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Logo_png_1 = require("../../../public/Logo.png");
var image_1 = require("next/image");
require("./splash.css");
function SplashScreen(_a) {
    var children = _a.children;
    var _b = react_1.useState(false), hide = _b[0], setHide = _b[1];
    var _c = react_1.useState(true), showSplash = _c[0], setShowSplash = _c[1];
    react_1.useEffect(function () {
        var timer1 = setTimeout(function () {
            setHide(true);
        }, 2000);
        var timer2 = setTimeout(function () {
            setShowSplash(false);
        }, 2800);
        return function () {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        showSplash && (React.createElement("div", { className: "splash " + (hide ? "hide" : "") },
            React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "" }))),
        children));
}
exports["default"] = SplashScreen;
