import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';

const repository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(repository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
