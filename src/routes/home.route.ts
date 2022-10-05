import { Router } from 'express';
import HomeController from '../controller/home.controller';

const router = Router();

router.get('/', HomeController.getHome);


export default router;