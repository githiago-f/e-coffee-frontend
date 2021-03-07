import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export const Container = (props: Props) => {
  return (
    <div className="container py-3">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
