import { Response, Request } from 'express';
import { Category } from '../../../entities/Category';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response<Category[]>> {
    const categories = await this.listCategoriesUseCase.run();

    return response.status(200).json(categories);
  }
}
