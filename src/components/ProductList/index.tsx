import React from 'react';
import { useProductListHooks } from './hooks';

export const ProductsList = () => {
  useProductListHooks(0);

  return (
    <div className="products-list">
    </div>
  );
};
