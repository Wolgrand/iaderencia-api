"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

require("./providers");

var _RewardsRepository = _interopRequireDefault(require("../../modules/rewards/infra/typeorm/repositories/RewardsRepository"));

var _CriteriasRepository = _interopRequireDefault(require("../../modules/criterias/infra/typeorm/repositories/CriteriasRepository"));

var _TransactionsRepository = _interopRequireDefault(require("../../modules/transactions/infra/typeorm/repositories/TransactionsRepository"));

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _UserTokensRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTokensRepository"));

var _NotificationsRepository = _interopRequireDefault(require("../../modules/notifications/infra/typeorm/repositories/NotificationsRepository"));

var _TransactionsRewardRepository = _interopRequireDefault(require("../../modules/transactions-rewards/infra/typeorm/repositories/TransactionsRewardRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('TransactionsRewardRepository', _TransactionsRewardRepository.default);

_tsyringe.container.registerSingleton('RewardsRepository', _RewardsRepository.default);

_tsyringe.container.registerSingleton('CriteriasRepository', _CriteriasRepository.default);

_tsyringe.container.registerSingleton('TransactionsRepository', _TransactionsRepository.default);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('UserTokensRepository', _UserTokensRepository.default);

_tsyringe.container.registerSingleton('NotificationsRepository', _NotificationsRepository.default);