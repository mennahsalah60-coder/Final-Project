"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthProvider = AuthProvider;
exports.useAuth = useAuth;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AuthContext = (0, _react.createContext)();

function AuthProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  (0, _react.useEffect)(function () {
    var savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []); // login

  var login = function login(data) {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  }; // logout


  var logout = function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }; // return (
  //     <AuthContext.Provider value={{ user, login, logout }}>
  //         {children}
  //     </AuthContext.Provider>
  // )

}

function useAuth() {
  return (0, _react.useContext)(AuthContext);
}