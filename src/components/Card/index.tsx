import React from 'react';
import { Props } from '@comp/card';
import { CardThumb } from './styles';

const Card = (props: Props) => {
  const { card: { title, subtitle } } = props;

  return (
    <div className="p-2">
      <CardThumb
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

export default Card;
