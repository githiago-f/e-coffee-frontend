import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export const Container = (props: Props) => {
  return (
    <div className="container mx-auto px-3 md:px-0 min-h-screen overflow-auto">
      {props.children}
    </div>
  );
};
