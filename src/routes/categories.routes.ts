import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/categories/createCategory';
import { importCategoryController } from '../modules/cars/useCases/categories/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/categories/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

/**
 * responsabilidade de receber a req chamar arquivo e repassar o retorno
 */
categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.handle(request, response)
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
