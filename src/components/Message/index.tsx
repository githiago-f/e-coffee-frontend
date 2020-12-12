import { Errors } from 'assets';
import { Translator } from 'locale';
import React from 'react';
import { ErrorTypes } from 'utils/err/errortypes';

type Props = Partial<{
  type: ErrorTypes;
}>

export const Message = ({ type }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="p-1">
          <img 
            src={Errors[type || 'none']} 
            alt="Error message"
            title={Translator.i18n.t(`errors.${type}`)}
          />
        </div>
        <h4> {Translator.i18n.t(`errors.${type}`)} </h4>
      </div>
    </div>
  );
};
