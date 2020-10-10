import React from 'react';
import { Props } from '@comp/card';
import { CardBody, CardHeader } from './styles';

const Card = (props: Props) => {
  const { card: { title } } = props;

  return (
    <>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardBody></CardBody>
    </>
  );
};

export default Card;
