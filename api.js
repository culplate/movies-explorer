import axios from 'axios'

const URL = 'https://api.themoviedb.org/3/';
const searchParam = 'search/movie';
const trendingParam = 'trending/movie/week?include_adult=true&language=en-US&page=1';

const API_KEY = 'a5e5694b5c6ed25f9fc27a46f040f3b8';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU1Njk0YjVjNmVkMjVmOWZjMjdhNDZmMDQwZjNiOCIsInN1YiI6IjY1ZDEwYmNhNjY3NTFkMDE2MzMwZjBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c8h12A5dXK4Ny8FGc_DKQnprEYQ-Rn819Y9Zg3Ffk_Y';

const options = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
}
export const fetchTrending = async () => {
    const response = await axios.get(`${URL + trendingParam}`, options)
    return response.data.results;
}

export const fetchByID = async (id) => {
    const response = await axios.get(`${URL}movie/${id}`, options)
    console.log(response.data)
    return response.data;
}

export const fetchByQuery = async (query) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    console.log(response.data)
    return response.data.results
}