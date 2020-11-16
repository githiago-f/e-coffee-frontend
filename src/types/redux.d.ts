declare module '@dataTypes/redux' {
  type Action = {
    type: string;
    payload: any;
  };

  type ReduxState = {
    language: string;
    items: Record<string, import('@dataTypes/coffee').CartProduct>;
  };

  type Reducer = import('redux').Reducer<ReduxState, Action>;
}
