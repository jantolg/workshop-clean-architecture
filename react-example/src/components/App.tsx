import {useState} from 'react';
import {ProductList} from '@/components/ProductList';
import {Basket} from '@domain/models/basket.model';
import {Product} from '@domain/models/product.model';
import {basketService} from '@/services/basket.service';

export default function App({msg}: {
    msg: string
}) {
    const [basket, setBasket] = useState<Basket | null>(null);

    const handleAddToCart = (product: Product) => {
        setBasket(basketService.addProductToBasket(product, basket));
    };

    return (
        <div className="App">
            <h1>{msg}</h1>
            <ProductList onSelectProduct={handleAddToCart}/>
            {basket && <p>Items on basket: {basket.items.length}</p>}
        </div>
    );
}
