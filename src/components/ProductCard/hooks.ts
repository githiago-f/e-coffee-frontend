import { Product } from 'entities';
import { cartItemFactory } from 'factory/cart-item';
import { useEffect, useMemo, useState } from 'react';
import { PriceService } from 'service/price-service';

export const useProductCardHooks = (product: Product) => {
  const [discounted, setDiscount] = useState(product.price);
  const priceService = useMemo(() => PriceService(), []);

  useEffect(() => {
    if(product.discount > 0) {
      const item = cartItemFactory(product, 1);
      const price = priceService.productPriceWithDiscount(item);
      setDiscount(price);
      return;
    }
  }, [product, priceService]);

  return {
    discounted
  };
};
