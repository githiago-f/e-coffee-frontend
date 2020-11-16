import { Action, Reducer, ReduxState } from '@dataTypes/redux';
import { getAllItems } from 'services/cart.api';
import { Actions } from './actions';

const initialState: ReduxState = {
  language: 'pt-br',
  items: getAllItems()
};

const reducer: Reducer = (state = initialState, action: Action) => {
  const items = {...state.items};

  switch(action.type) {
  case Actions.SET_LANGUAGE:
    return Object.assign({}, state, {
      language: action.payload.language
    });

  case Actions.ADD_CART_ITEM:
    return Object.assign({}, state, {
      items: {...items, ...action.payload.item}
    });

  case Actions.REM_CART_ITEM:
    delete items[action.payload.key];
    return Object.assign({}, state, {
      items: items
    });
  
  default:
    return state;
  }
};

export default reducer;
