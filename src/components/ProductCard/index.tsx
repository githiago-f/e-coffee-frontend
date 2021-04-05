import React from 'react';
import { Price } from 'components/Price';
import { Link } from 'components/Link';
import { Translator } from 'locale';
import { Image } from 'components/Image';
import { Product } from 'entities';
import { Striped } from 'components/StyledBase/styles';
import { useProductCardHooks } from './hooks';

type Props = {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { name, price, thumb, code } = props.product;

  const {discounted} = useProductCardHooks(props.product);

  return (
    <Link
      data-testid="product-item"
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
          <h3> {name} </h3>
          <div className="row">
            <Striped hidden={price === discounted}>{Translator.nativeToCurrency(price)}</Striped>
          </div>
          <div className="row">
            <Price
              size="1.5rem"
              bold="600"
              price={discounted}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
