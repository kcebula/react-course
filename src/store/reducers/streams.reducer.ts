import { Action } from 'redux';
import {
  CREATE_STREAM,
  DELETE_STREAM_BY_ID,
  EDIT_STREAM_BY_ID,
  GET_STREAM_BY_ID,
  GET_STREAMS
} from '../actions/types';

import * as _ from 'lodash';

type State = {[key: string]: any};

const initialState: State = {};

export const reducer = (state: State = initialState, action: Action & {payload: any}) => {
  switch (action.type) {
    case GET_STREAMS:
      return { ...state, ...(_.mapKeys(action.payload, 'id')) };
    case DELETE_STREAM_BY_ID:
      return _.omit({ ...state }, action.payload);
    case GET_STREAM_BY_ID:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM_BY_ID:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
