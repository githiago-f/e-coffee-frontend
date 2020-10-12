import React from 'react';
import { TLoader } from '@comp/fallbacks';

export const Spinner = (props: TLoader) => {
  return (
    props.loading &&
    <div className="spinner-border" role="status">
      <span className="sr-only">
        Loading...
      </span>
    </div>
  );
};
