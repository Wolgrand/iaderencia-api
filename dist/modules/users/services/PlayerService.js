"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _ITransactionsRepository = _interopRequireDefault(require("../../transactions/repositories/ITransactionsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlayerService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('TransactionsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _ITransactionsRepository.default === "undefined" ? Object : _ITransactionsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class PlayerService {
  constructor(usersRepository, transactionsRepository) {
    this.usersRepository = usersRepository;
    this.transactionsRepository = transactionsRepository;
  }

  async execute(user_id) {
    const player = await this.usersRepository.findById(user_id);
    return player;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = PlayerService;
exports.default = _default;