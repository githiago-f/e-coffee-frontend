import { useEffect, useState } from 'react';
import { Product } from '@comp/product';

export const useProductHooks = (product_id: string) => {
  const [ product, setProduct ] = useState({} as Product);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // todo
    setTimeout(() => {
      setProduct({
        product_id: 3,
        productType: 'cappuccino',
        name: 'Cappuccino',
        price: 3.40,
        cover_image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=72'
      });
      setLoading(false);
    }, 3000);
  }, [ product_id ]);

  return {
    product,
    loading
  };
};
