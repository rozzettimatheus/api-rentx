import { Category } from '../../../model/Category';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private repository: CategoriesRepository) {}

  run(): Category[] {
    const categories = this.repository.list();

    return categories;
  }
}
