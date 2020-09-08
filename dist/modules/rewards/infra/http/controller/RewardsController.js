"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateRewardService = _interopRequireDefault(require("../../../services/CreateRewardService"));

var _ListRewardService = _interopRequireDefault(require("../../../services/ListRewardService"));

var _DeleteRewardService = _interopRequireDefault(require("../../../services/DeleteRewardService"));

var _UpdateRewardService = _interopRequireDefault(require("../../../services/UpdateRewardService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RewardsController {
  async create(request, response) {
    const {
      title,
      icon,
      score,
      description
    } = request.body;

    const createReward = _tsyringe.container.resolve(_CreateRewardService.default);

    const reward = await createReward.execute({
      title,
      icon,
      score,
      description
    });
    return response.json(reward);
  }

  async show(request, response) {
    const listRewards = _tsyringe.container.resolve(_ListRewardService.default);

    const rewards = await listRewards.execute();
    return response.json(rewards);
  }

  async delete(request, response) {
    const deleteReward = _tsyringe.container.resolve(_DeleteRewardService.default);

    const {
      id
    } = request.params;
    const reward = await deleteReward.execute(id);
    return response.json(reward);
  }

  async update(request, response) {
    const {
      title,
      icon,
      score,
      description
    } = request.body;

    const updateReward = _tsyringe.container.resolve(_UpdateRewardService.default);

    const {
      id
    } = request.params;
    const reward = await updateReward.execute({
      id,
      title,
      icon,
      score,
      description
    });
    return response.json(reward);
  }

}

exports.default = RewardsController;