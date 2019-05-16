import jsonPlaceholder from '../../apis/JsonPlacecholder'
import { Dispatch } from 'redux';
import _ from 'lodash';

export const loadPosts = () => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'LOAD_POSTS', payload: response.data });
};

/*
const  _getUserById = _.memoize(async (id: number, dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get('/users/' + id);

  dispatch({ type: 'GET_USER', payload: response.data });
});

export const getUserById = (id: number) => (dispatch: Dispatch) => _getUserById(id, dispatch);
*/
export const getUserById = (id: number) => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get('/users/' + id);

  dispatch({ type: 'GET_USER', payload: response.data });
};


export const fetchPostsAndUsers = () => async (dispatch: Dispatch<any>, getState: () => any) => {
  await dispatch(loadPosts());

  const authors: number[] = _.uniq(getState().posts.map((post: any) => post.userId))
  authors.forEach((id: number) => {
    dispatch(getUserById(id));
  })

};
