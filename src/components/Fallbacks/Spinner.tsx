import React from 'react';
import { TLoader } from '@comp/fallbacks';

export const Spinner = (props: TLoader) => {
  return (
    <div 
      className="spinner-border" 
      hidden={props.loading} 
      role="status"
    >
      <span className="sr-only">
        Loading...
      </span>
    </div>
  );
};
