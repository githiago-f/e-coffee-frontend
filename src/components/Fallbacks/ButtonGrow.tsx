import React from 'react';
import { TLoader } from '@comp/fallbacks';

export const ButtonGrow = (props: TLoader) => {
  return (
    <button className="btn btn-primary" type="button" disabled>
      <span 
        hidden={props.loading}
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      {props.loading ? 'Loading...' : props.children }
    </button>
  );
};
