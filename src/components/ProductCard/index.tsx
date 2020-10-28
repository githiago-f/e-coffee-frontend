import React from 'react';
import { Props } from '@comp/product';
import { Price, ProductThumb } from './styles';
import { Link } from 'components/Link';
import { Translator } from 'locale';

const ProductCard = (props: Props) => {
  const { name, price, cover_image_url, product_id } = props;

  return (
    <Link to={`/product/${product_id}`} title={Translator.i18n.t('product.title', { title: name })}>
      <div className="p-2">
        <ProductThumb
          image={cover_image_url}
        />
        <div className="p-2">
          <h3>
            <small>{name}</small>
          </h3>
          <div className="row">
            <Price>{Translator.i18n.l('currency', price)}</Price>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
