export enum ErrorEnum {
  NONE = 'none',
  NO_CONTENT = 'empty_content'
}

export const hasError = (error: ErrorEnum) => {
  return error !== ErrorEnum.NONE;
};
