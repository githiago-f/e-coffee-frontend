import { ErrorHandler } from '@dataTypes/errors';
import { ErrorTypes } from './errortypes';

export const emptyError: ErrorHandler = (err, next) => {
  if(err.message.match(/no-content/gi)) {
    return {
      type: ErrorTypes.EMPTY
    };
  }
  if(next) {
    return next(err);
  }
};
