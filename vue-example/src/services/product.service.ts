import {productService as _productService} from '@domain/services/product.service';
import {productRepository} from '@/repositories/product.repository';


export const productService = {
  getProducts: async () => {
    return await _productService.getProducts(productRepository);
  }
};
