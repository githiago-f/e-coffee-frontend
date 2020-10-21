import React from 'react';
import { Props } from '@comp/product';
import { ProductThumb } from './styles';
import { Link } from 'components/Link';

const Product = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <Link to="#">
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
    </Link>
  );
};

export default Product;
