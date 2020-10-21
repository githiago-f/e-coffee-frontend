import React from 'react';
import { Props } from '@comp/product';
import { ProductThumb } from './styles';

const Product = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div className="p-2">
      <ProductThumb
        image="https://via.placeholder.com/300x300"
      />
      <div className="p-2">
        <h3>
          <small>{title}</small>
        </h3>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Product;
