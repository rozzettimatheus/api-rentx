import { Specification } from '../entities/Specification';

export interface ICreateSpecificationDTO {
  description: string;
  name: string;
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | null;
}
