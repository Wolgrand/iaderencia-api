"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _sessions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));

var _password = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/password.routes"));

var _profile = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/profile.routes"));

var _rank = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/rank.routes"));

var _player = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/player.routes"));

var _top = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/top3.routes"));

var _top3Department = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/top3Department.routes"));

var _criterias = _interopRequireDefault(require("../../../../modules/criterias/infra/http/routes/criterias.routes"));

var _transactions = _interopRequireDefault(require("../../../../modules/transactions/infra/http/routes/transactions.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/players', _player.default);
routes.use('/top3', _top.default);
routes.use('/departments', _top3Department.default);
routes.use('/users', _users.default);
routes.use('/sessions', _sessions.default);
routes.use('/password', _password.default);
routes.use('/profile', _profile.default);
routes.use('/rank', _rank.default);
routes.use('/transactions', _transactions.default);
routes.use('/criterias', _criterias.default);
var _default = routes;
exports.default = _default;