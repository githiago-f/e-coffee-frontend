import { Reducer, ReduxState } from '@dataTypes/redux';
import { Actions } from './actions';

const initialState: ReduxState = {
  language: 'en'
}

const reducer: Reducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload.language
      });
    default:
      return state;
  }
}

export default reducer;
