import * as React from 'react';
import {useEffect, useState} from 'react';
import {Product} from '@domain/models/product.model';
import {productService} from '@/services/product.service';


export function ProductList({onSelectProduct}: {
  onSelectProduct: (product: Product) => void
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  return (
      <ul>
        {products.map((product) => <li key={product.id}>
          <button onClick={() => {
            onSelectProduct(product);
          }}>{product.title}</button>
        </li>)}
      </ul>
  );
}
