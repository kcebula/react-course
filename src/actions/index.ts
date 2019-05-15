import { Song } from '../reducers';

export const selectSong = (song: Song) => {
  return {
    type: 'SELECT_SONG',
    payload: song
  }
};

