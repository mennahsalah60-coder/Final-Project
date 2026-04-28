'use client';
"use strict";
exports.__esModule = true;
var AuthContext_1 = require("../navbar/AuthContext");
var navigation_1 = require("next/navigation");
require("./complete.css");
function CompleteProfile() {
    var user = AuthContext_1.useAuth().user;
    var router = navigation_1.useRouter();
    var isProfileComplete = (user === null || user === void 0 ? void 0 : user.firstName) && (user === null || user === void 0 ? void 0 : user.lastName) && (user === null || user === void 0 ? void 0 : user.email) && (user === null || user === void 0 ? void 0 : user.Address);
    if (!user || isProfileComplete)
        return null;
    return (React.createElement("div", { className: "complete-alert countainer" },
        React.createElement("p", null, "Please complete your account information"),
        React.createElement("button", { className: 'shop', onClick: function () { return router.push('/profile'); } }, "Go to Profile")));
}
exports["default"] = CompleteProfile;
