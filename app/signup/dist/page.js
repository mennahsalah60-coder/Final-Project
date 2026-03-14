'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var formik_1 = require("formik");
var Yup = require("yup");
require("./signup.css");
function Page() {
    var _a = react_1.useState(''), message = _a[0], setMessage = _a[1];
    var _b = react_1.useState(false), showAlert = _b[0], setShowAlert = _b[1];
    var router = navigation_1.useRouter();
    var formik = formik_1.useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters at least')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: function (values) {
            var fakeToken = '123456';
            localStorage.setItem('token', fakeToken);
            setMessage('Logged in successfully!');
            setShowAlert(true);
            setTimeout(function () {
                setShowAlert(false);
                router.push('/home');
            }, 3000);
            console.log(values);
            formik.resetForm();
        }
    });
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: 'form countainer' },
            react_1["default"].createElement("h2", null, "Create Account"),
            react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
                react_1["default"].createElement("input", { id: "email", name: "email", type: "email", placeholder: 'Email', onChange: formik.handleChange, value: formik.values.email }),
                formik.touched.email && formik.errors.email ? (react_1["default"].createElement("div", { className: 'error' }, formik.errors.email)) : null,
                react_1["default"].createElement("input", { id: "password", name: "password", type: "password", placeholder: 'Password', onChange: formik.handleChange, value: formik.values.password }),
                formik.touched.password && formik.errors.password ? (react_1["default"].createElement("div", { className: 'error' }, formik.errors.password)) : null,
                react_1["default"].createElement("input", { id: "confirmPassword", name: "confirmPassword", type: "confirmPassword", placeholder: 'Confirm Password', onChange: formik.handleChange, value: formik.values.confirmPassword }),
                formik.touched.confirmPassword && formik.errors.confirmPassword ? (react_1["default"].createElement("div", { className: 'error' }, formik.errors.confirmPassword)) : null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("input", { type: "radio", name: 'remember', required: true }),
                    react_1["default"].createElement("p", null, "Accept all terms & Conditions")),
                react_1["default"].createElement("button", { type: "submit" }, "Create Account")),
            react_1["default"].createElement("p", null,
                "Already have account ",
                react_1["default"].createElement(link_1["default"], { href: "/signin" }, "Login")),
            showAlert && (react_1["default"].createElement("div", { style: {
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                } }, message)))));
}
exports["default"] = Page;
