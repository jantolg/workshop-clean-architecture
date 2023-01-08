import {Product} from '../models/product.model';

interface ProductRepository {
  getProducts: () => Promise<Product[]>
}

export const productService = {
  getProducts: async (repository: Pick<ProductRepository, 'getProducts'>) => {
    return await repository.getProducts();
  }
};
