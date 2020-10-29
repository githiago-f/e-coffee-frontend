import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<{}> {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading: boolean;
}

export const ButtonGrow = (props: Props) => {
  return (
    <button onClick={props.onClick} className="btn btn-light w-100" type="button" disabled={props.loading}>
      <span
        hidden={!props.loading}
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>{' '}
      {props.loading ? '' : props.children }
    </button>
  );
};
