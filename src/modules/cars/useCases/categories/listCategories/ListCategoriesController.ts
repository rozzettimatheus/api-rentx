import { Response, Request } from 'express';
import { Category } from '../../model/Category';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response<Category[]> {
    const categories = this.listCategoriesUseCase.run();

    return response.status(200).json(categories);
  }
}
