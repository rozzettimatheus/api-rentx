import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/specifications/createSpecification';

const specificationsRouter = Router();

specificationsRouter.use('/', (request, response) =>
  createSpecificationController.handle(request, response)
);

export { specificationsRouter };
