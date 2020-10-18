declare module '@dataTypes/redux' {
  type Action = {
    type: string;
    payload: ReduxState;
  };

  type ReduxState = {
    language: string;
  };

  type Reducer = import('redux').Reducer<ReduxState, Action>;
}
