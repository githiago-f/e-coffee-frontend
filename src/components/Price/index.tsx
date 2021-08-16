import { LanguageContext } from 'context/LanguageContext';
import { Translator } from 'locale';
import React from 'react';
import { useContext } from 'react';

type Props = {
  price: number;
  size?: string;
  bold?: string;
}

export const Price = (props: Props) => {
  const {lang} = useContext(LanguageContext);

  return (
    <span data-language={lang} {...props}>
      {Translator.nativeToCurrency(props.price)}
    </span>
  );
};
