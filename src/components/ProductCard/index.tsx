import React from 'react';
import { Price } from 'components/Price';
import { Translator } from 'locale';
import { Product } from 'entity/Product';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <Link
      data-testid="product-item"
      to={`/product/${props.product.id}`}
      title={Translator.i18n.t('product.title', { title: props.product.name })}
    >
      <div className="p-2">
        <img
          title={Translator.i18n.t('product.cover', { name: props.product.name })}
          alt={`cover-${props.product.name.toLowerCase().replace(/[\s]/gi, '-')}`}
          loading="lazy"
          src={props.product.image}
        />
        <div className="p-2">
          <h3> {name} </h3>
          <div className="row">
            <Price price={props.product.price} />
          </div>
          <div className="row">
            <Price
              size="1.5rem"
              bold="600"
              price={props.product.price}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
