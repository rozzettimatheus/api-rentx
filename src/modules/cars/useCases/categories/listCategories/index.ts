import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

// fazer sempre do inverso (rota -> controller -> useCase -> repositorio)

const repository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(repository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
