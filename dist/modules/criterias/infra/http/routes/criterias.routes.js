"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CriteriasController = _interopRequireDefault(require("../controller/CriteriasController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const criteriasRouter = (0, _express.Router)();
const criteriasController = new _CriteriasController.default();
criteriasRouter.post('/', criteriasController.create);
criteriasRouter.delete('/:id', criteriasController.delete);
criteriasRouter.put('/:id', criteriasController.update);
criteriasRouter.get('/', criteriasController.show);
var _default = criteriasRouter;
exports.default = _default;