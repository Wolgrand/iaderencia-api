"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TopDepartmentController = _interopRequireDefault(require("../controllers/TopDepartmentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const topDepartmentRouter = (0, _express.Router)();
const topDepController = new _TopDepartmentController.default();
topDepartmentRouter.get('/', topDepController.show);
var _default = topDepartmentRouter;
exports.default = _default;