import React from 'react';
import { Props } from '@comp/card';
import { CardThumb } from './styles';

const Card = (props: Props) => {
  const { card: { title, subtitle } } = props;

  return (
    <div className="p-3">
      <div className="row">
        <div className="col-7">
          <h2>{title}</h2>
          <h4><small>{subtitle}</small></h4>
        </div>
        <div className="col-5">
          <CardThumb
            image={'https://via.placeholder.com/300x300'}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
