import { Router } from 'express';

import Top3Controller from '../controllers/Top3Controller';

const top3Router = Router();
const top3Controller = new Top3Controller();

top3Router.get('/', top3Controller.show);

export default top3Router;
