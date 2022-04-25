import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

export default (): CreateCategoryController => {
  const repository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(repository);

  return new CreateCategoryController(createCategoryUseCase);
};
