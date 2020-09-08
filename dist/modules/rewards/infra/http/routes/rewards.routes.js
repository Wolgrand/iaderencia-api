"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RewardsController = _interopRequireDefault(require("../controller/RewardsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rewardsRouter = (0, _express.Router)();
const rewardsController = new _RewardsController.default();
rewardsRouter.post('/', rewardsController.create);
rewardsRouter.delete('/:id', rewardsController.delete);
rewardsRouter.put('/:id', rewardsController.update);
rewardsRouter.get('/', rewardsController.show);
var _default = rewardsRouter;
exports.default = _default;