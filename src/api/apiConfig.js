export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = `${import.meta.env.VITE_APP_API_KEY}`;

export const ENDPOINTS = {
  POPULAR: '/movie/popular',
  MOVIE_DETAILS: '/movie',
  MOVIE_VIDEOS: '/movie/{id}/videos',
  GENRE_LIST: '/genre/movie/list',
  DISCOVER: '/discover/movie',
};

export const DEFAULT_PARAMS = {
  language: 'en-US',
  page: 1,
};

export const GENRES = {
  ACTION: 28,
  COMEDY: 35,
  CRIME: 80,
  ANIMATION: 16,
  DRAMA: 18,
  HORROR: 27,
  SCI_FI: 878,
};
