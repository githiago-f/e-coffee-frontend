import { LanguageContext } from 'context/LanguageContext';
import { Translator } from 'locale';
import React from 'react';
import { useContext } from 'react';
import { StyledPrice } from './styled';

type Props = {
  price: number;
  size?: string;
  bold?: string;
}

export const Price = (props: Props) => {
  const {lang} = useContext(LanguageContext);

  return (
    <StyledPrice data-language={lang} {...props}>
      {Translator.nativeToCurrency(props.price)}
    </StyledPrice>
  );
};
