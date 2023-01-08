import { Product } from '../models/product.model'

export type BasketId = string | undefined

export type Basket = {
  id: BasketId
  items: Product[]
}
