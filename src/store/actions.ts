import { Action, ReduxState } from "@dataTypes/redux"

export enum Actions {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

export const setLanguage = (lang: string): Action => {
  return {
    type: Actions.SET_LANGUAGE,
    payload: {
      language: lang
    } as ReduxState
  };
};
