import { ErrorHandler } from '@dataTypes/errors';
import { ErrorTypes } from './errortypes';

export const emptyError: ErrorHandler = (err, next) => {
  return {
    type: ErrorTypes.EMPTY
  };
};
