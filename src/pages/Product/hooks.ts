import { Product } from 'entities';
import { buildProduct } from 'factory/product';
import { useEffect, useState } from 'react';

const image = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=72';

export const useProductHooks = (code: string) => {
  const [ product, setProduct ] = useState({} as Product);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // todo
    setTimeout(() => {
      setProduct(buildProduct('product-code', 'Cappucinno', 3.40, image));
      setLoading(false);
    }, 3000);
  }, [ code ]);

  return {
    product,
    loading
  };
};
