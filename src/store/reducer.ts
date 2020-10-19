import { Action, Reducer, ReduxState } from '@dataTypes/redux';
import { Actions } from './actions';

const initialState: ReduxState = {
  language: 'pt-br'
};

const reducer: Reducer = (state = initialState, action: Action) => {
  switch(action.type) {
  case Actions.SET_LANGUAGE:
    return Object.assign({}, state, {
      language: action.payload.language
    });

  default:
    return state;
  }
};

export default reducer;
