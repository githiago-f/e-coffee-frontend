import React from 'react';
import { Price } from './styles';
import { Link } from 'components/Link';
import { Translator } from 'locale';
import { Image } from 'components/Image';
import { Product } from 'entities';

type Props = {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { name, price, thumb, code } = props.product;

  return (
    <Link 
      to={`/product/${code}`}
      title={Translator.i18n.t('product.title', { title: name })}
    >
      <div className="p-2">
        <Image
          title={Translator.i18n.t('product.cover', { name })}
          alt={`cover-${name.toLowerCase().replace(/[\s]/gi, '-')}`}
          loading="lazy"
          src={thumb}
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
