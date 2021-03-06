import { Errors } from 'assets';
import { Translator } from 'locale';
import React from 'react';

type Props = {
  type?: keyof typeof Errors;
}

export const Message = ({ type }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="p-1 text-center">
          <img
            src={Errors[type || 'none']} 
            alt="Error message"
            width="400"
            height="400"
            title={Translator.i18n.t(`errors.${type}`)}
          />
          <h4> {Translator.i18n.t(`errors.${type}`)} </h4>
        </div>
      </div>
    </div>
  );
};
