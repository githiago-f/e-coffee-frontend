import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export const Container = (props: Props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};
