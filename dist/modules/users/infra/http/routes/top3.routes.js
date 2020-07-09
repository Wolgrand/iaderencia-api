"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Top3Controller = _interopRequireDefault(require("../controllers/Top3Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const top3Router = (0, _express.Router)();
const top3Controller = new _Top3Controller.default();
top3Router.get('/', top3Controller.show);
var _default = top3Router;
exports.default = _default;