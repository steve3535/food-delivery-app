import { Request, Response } from 'express';
import { Model } from 'mongoose';

export default abstract class BaseController {
  constructor(protected model: Model<any>) {}

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const items = await this.model.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await this.model.findById(req.params.id);
      if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await this.model.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await this.model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await this.model.findByIdAndDelete(req.params.id);
      if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
