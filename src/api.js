// api.js
import axios from 'axios';

// Base Axios instance
const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 5000,
});

// Example GET request to fetch anime list
export const fetchAnimeList = () => {
  console.log('API: Fetching anime list...');
  return api.get('/anime');
};

// Example GET request to fetch a single anime
export const fetchAnimeById = (id) => {
  console.log(`API: Fetching anime with ID ${id}...`);
  return api.get(`/anime/${id}`);
};

// Simulated POST (not supported by Jikan, for future backend use)
export const createAnime = (data) => {
  console.log('API: Simulating anime creation...', data);
  return Promise.resolve({ data: { message: 'Anime created (simulated)' } });
};

// Simulated PUT (not supported by Jikan)
export const updateAnime = (id, data) => {
  console.log(`API: Simulating update for anime ID ${id}...`, data);
  return Promise.resolve({ data: { message: 'Anime updated (simulated)' } });
};

// Simulated DELETE (not supported by Jikan)
export const deleteAnime = (id) => {
  console.log(`API: Simulating deletion for anime ID ${id}...`);
  return Promise.resolve({ data: { message: 'Anime deleted (simulated)' } });
};