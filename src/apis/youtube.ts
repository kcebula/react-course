import axios, { AxiosPromise } from 'axios';

const KEY = 'AIzaSyBoYs1hFHLgLe6yzR1m13jZGf6AcxwxV-c';

const baseRequest = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});

export const getVideos: (query: string) => AxiosPromise = (query: string) => {
  return baseRequest.get('/search', {
    params: {
      q: query
    }
  })
};
