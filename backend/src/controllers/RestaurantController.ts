import { Request, Response } from 'express';
import BaseController from './BaseController';
import { Restaurant } from '../models';

export default class RestaurantController extends BaseController {
  constructor() {
    super(Restaurant);
  }

  // Custom method for getting menu items
  getMenuItems = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const menuItems = await Restaurant.findById(id).populate('menuItems');
      if (!menuItems) {
        res.status(404).json({ error: 'Restaurant not found' });
        return;
      }
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
