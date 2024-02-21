import axios from 'axios'

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a5e5694b5c6ed25f9fc27a46f040f3b8';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU1Njk0YjVjNmVkMjVmOWZjMjdhNDZmMDQwZjNiOCIsInN1YiI6IjY1ZDEwYmNhNjY3NTFkMDE2MzMwZjBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c8h12A5dXK4Ny8FGc_DKQnprEYQ-Rn819Y9Zg3Ffk_Y';
const language = 'language=en-US';

const trendingParam = `trending/movie/week?include_adult=true&${language}&page=1`;
const movieCredits = `movie/movie_id/credits?${language}`

const options = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
}
export const fetchTrending = async () => {
    const response = await axios.get(`${URL + trendingParam}`, options);
    return response.data.results;
}

export const fetchByID = async (id) => {
    const response = await axios.get(`${URL}movie/${id}`, options);
    return response.data;
}

export const fetchCreditsByID = async (id) => {
    const response = await axios.get(`${URL}movie/${id}/credits?${language}`, options);
    console.log(response.data.cast.slice(1, 10));
    return response.data.cast.slice(1, 10);
}

export const fetchReviewsByID = async (id) => {
    const response = await axios.get(`${URL}movie/${id}/reviews?${language}`, options);
    console.log(response.data.results.slice(1, 6));
    return response.data.results.slice(1, 6);
}

export const fetchByQuery = async (query) => {
    const response = await axios.get(`${URL}search/movie?query=${query}&include_adult=true&${language}&page=1`, options);
    return response.data.results
}