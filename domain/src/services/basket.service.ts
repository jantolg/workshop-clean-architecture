import {Product} from '../models/product.model';
import {Basket, BasketId} from '../models/basket.model';

const hasProduct = (basket: Basket, product: Product) => basket.items.find((item) => item.id === product.id);

const createBasket = (product: Product, generateUid?: () => BasketId) => ({
  id: generateUid ? generateUid() : undefined,
  items: [product]
});

const increaseBasket = (basket: Basket, product: Product) => ({
  ...basket,
  items: [...basket.items, product]
});

const addProductToBasket = (product: Product, basket?: Basket | null, generateUid?: () => BasketId): Basket =>
    basket
        ? hasProduct(basket, product)
        ? basket
        : increaseBasket(basket, product)
        : createBasket(product, generateUid);

export const basket = {
  addProductToBasket
};
