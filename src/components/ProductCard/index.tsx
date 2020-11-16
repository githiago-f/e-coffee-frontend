import React from 'react';
import { Props } from '@comp/product';
import { Price } from './styles';
import { Link } from 'components/Link';
import { Translator } from 'locale';
import { Image } from 'components/Image';

const ProductCard = (props: Props) => {
  const { name, price, cover_image_url, product_id } = props.product;

  return (
    <Link 
      to={`/product/${product_id}`}
      title={Translator.i18n.t('product.title', { title: name })}
    >
      <div className="p-2">
        <Image
          title={Translator.i18n.t('product.cover', { name })}
          alt={`cover-${name.toLowerCase().replace(/[\s]/gi, '-')}`}
          loading="lazy"
          src={cover_image_url}
        />
        <div className="p-2">
          <h3>
            <small>{name}</small>
          </h3>
          <div className="row">
            <Price>{Translator.nativeToCurrency(price)}</Price>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
