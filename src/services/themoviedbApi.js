import axios from 'axios';

//MOVE EVERYTHING TO THE BACKEND
const URL = 'https://api.themoviedb.org/3/';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU1Njk0YjVjNmVkMjVmOWZjMjdhNDZmMDQwZjNiOCIsIm5iZiI6MTcyODg0ODc0Ny44NzEwOTgsInN1YiI6IjY1ZDEwYmNhNjY3NTFkMDE2MzMwZjBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-UMs_ZdguBgOkYYrhZgKl3oh_nLPQ0enUGrZ7DH-dGQ';
const language = 'language=en-US';

const trendingParam = `trending/movie/week?include_adult=true&${language}&page=1`;
const movieCredits = `movie/movie_id/credits?${language}`;

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
export const fetchTrending = async () => {
  const response = await axios.get(`${URL + trendingParam}`, options);
  return response.data.results;
};

export const fetchByID = async (id) => {
  const response = await axios.get(`${URL}movie/${id}`, options);
  return response.data;
};

export const fetchCreditsByID = async (id) => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?${language}`,
    options
  );
  return response.data.cast.slice(1, 11);
};

export const fetchReviewsByID = async (id) => {
  const response = await axios.get(
    `${URL}movie/${id}/reviews?${language}`,
    options
  );
  return response.data.results.slice(1, 6);
};

export const fetchByQuery = async (query) => {
  const response = await axios.get(
    `${URL}search/movie?query=${query}&include_adult=true&${language}&page=1`,
    options
  );
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    options
  );
  return response.data.genres;
};

export const fetchByGenreId = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`
  );
  return response.data.results;
};
