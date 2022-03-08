import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/** unica responsabilidade */
export class CreateCategoryUseCase {
  // invrsao de dependencia
  constructor(private categoriesRepository: ICategoriesRepository) {}

  run({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}
