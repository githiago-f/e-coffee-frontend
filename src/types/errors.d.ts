declare module '@dataTypes/errors' {
  type ErrorHandler = (err: Error, next?: ErrorHandler) => {
    type: import('utils/err/errortypes').ErrorTypes
  } | undefined;
}
