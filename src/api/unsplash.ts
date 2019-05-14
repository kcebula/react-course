import axios from 'axios';

const secrets = {
  access: '2ab44fcec8ea35eeaa0662f280ecdddaf63cfa2eeed7d4cc78faf069bc99fd56',
};


export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    authorization: `Client-ID ${secrets.access}`
  }
});
