import streams from './../../apis/streams';
import history from './../../history'

import {
  CREATE_STREAM,
  DELETE_STREAM_BY_ID,
  EDIT_STREAM_BY_ID,
  GET_STREAM_BY_ID,
  GET_STREAMS,
  SIGN_IN,
  SIGN_OUT
} from './types';
import { Dispatch } from 'redux';

export const signIn = (userId: string) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues: any) => async (dispatch: Dispatch, getState: any) => {
  const { userId }= getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  history.push('/');
};

export const getStreams = () => async (dispatch: Dispatch) => {
  const response = await streams.get('/streams');

  dispatch({
    type: GET_STREAMS,
    payload: response.data
  });
};
export const getStreamById = (id: number) => async (dispatch: Dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: GET_STREAM_BY_ID,
    payload: response.data
  });
};

export const deleteStreamById = (id: number) => async (dispatch: Dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM_BY_ID,
    payload: id
  });

  history.push('/');
};

export const editStream = (id: number, formValues: any) => async (dispatch: Dispatch) => {
  const response = await streams.patch(`/streams/${formValues.id}`, formValues);

  dispatch({
    type: EDIT_STREAM_BY_ID,
    payload: formValues
  });

  history.push('/');
};
