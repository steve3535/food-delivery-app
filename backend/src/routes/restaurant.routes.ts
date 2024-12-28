import { Router } from 'express';
import RestaurantController from '../controllers/RestaurantController';

const router = Router();
const controller = new RestaurantController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id/menu-items', controller.getMenuItems);

export default router;
