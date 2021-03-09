import { Product } from 'entities';
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';
import { CartService } from 'service/cart-service';
import { Translator } from 'locale';
import { LanguageContext } from 'context/LanguageContext';

export const useBuyFormHooks = (product: Product) => {
  const [quantity, setQuantity] = useState(1);
  const {lang} = useContext(LanguageContext);

  const buttonAddToCart = useCallback(() => {
    CartService().then(service => {
      service.addItem(product, quantity);
    });
  }, [product, quantity]);

  const changeQuantity = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    if(isNaN(ev.target.valueAsNumber)){
      setQuantity(1);
      return;
    }
    setQuantity(ev.target.valueAsNumber);
  }, []);

  const currentPrice = useMemo(() => {
    const {price, discount} = product;
    const equivalent = price - (price * discount);
    console.log(lang);
    return Translator.nativeToCurrency(equivalent * quantity);
  }, [product, quantity, lang]);

  return {
    buttonAddToCart,
    changeQuantity,
    quantity,
    currentPrice
  };
};
