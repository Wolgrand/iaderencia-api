"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PlayerController = _interopRequireDefault(require("../controllers/PlayerController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const playerRouter = (0, _express.Router)();
const playerController = new _PlayerController.default();
playerRouter.get('/:user_id', playerController.index);
var _default = playerRouter;
exports.default = _default;