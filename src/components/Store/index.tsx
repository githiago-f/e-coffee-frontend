import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  store: import('entity/Store').Store;
};

export const Store = ({store}: Props) => (
  <Link to={`/store/${store.id}`}>
    
  </Link>
);
