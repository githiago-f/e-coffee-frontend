import { emptyError } from './empty.err';

export const ErrorHandler = (err: Error) => {
  return emptyError(err);
};
