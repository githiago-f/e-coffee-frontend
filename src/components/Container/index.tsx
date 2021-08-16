import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export const Container = (props: Props) => {
  return (
    <div className="container mx-auto sm:px-2 min-h-screen overflow-auto">
      {props.children}
    </div>
  );
};
