import { Reducer, combineReducers } from 'redux';

export interface Song {
  title: string,
  duration: string
}

const songs: Song[] = [
  {title: 'Still loving You', duration: '1:12'},
  {title: 'It\'s My Life', duration: '2:14'},
  {title: 'American Woman', duration: '3:16'},
  {title: 'Patience', duration: '4:18'},
]

const songsReducer = () => {
  return [ ...songs ];
};

const selectedSongReducer: Reducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
