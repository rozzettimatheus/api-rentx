import { Category } from '../../../entities/Category';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private repository: CategoriesRepository) {}

  async run(): Promise<Category[]> {
    const categories = await this.repository.list();

    return categories;
  }
}
