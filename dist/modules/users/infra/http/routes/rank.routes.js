"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RankController = _interopRequireDefault(require("../controllers/RankController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rankRouter = (0, _express.Router)();
const rankController = new _RankController.default();
rankRouter.get('/', rankController.show);
var _default = rankRouter;
exports.default = _default;