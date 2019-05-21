import { Action } from 'redux';
import { SIGN_IN, SIGN_OUT } from '../actions/types';


interface State {
  isSignedIn: boolean | null,
  userId: string | null
}

const initialState: State = {
  isSignedIn: null,
  userId: null
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SIGN_IN:
       return { ...state, isSignedIn: true, userId: (action as Action & {payload: string}).payload };
    case SIGN_OUT:
       return { ...state, isSignedIn: false, userId: null};
    default:
      return state;
  }
}
