import { Response } from 'express';

export class httpResponse {
  static responseHttp(data: object | null, res: Response): Response {
    if (!data) {
      return res.status(400).json({ message: 'Problema na requisição' });
    }
    return res.status(200).json(data);
  }
}
