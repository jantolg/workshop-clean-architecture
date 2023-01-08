import {addProductToBasket as _addProductToBasket} from '@domain/services/basket.service';
import {Product} from '@domain/models/product.model';
import {Basket} from '@domain/models/basket.model';
import {generateUid} from '@/utils/uid';

const addProductToBasket = (product: Product, basket?: Basket | null): Basket =>
    _addProductToBasket(product, basket, generateUid);

export const basketService = {
  addProductToBasket
};
