import axios  from "axios";

const URL = 'https://api.themoviedb.org/3/trending/movie/week'

const URLBYID = 'https://api.themoviedb.org/3/movie'




const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmMxMjkzYWMyNDczMzIyNmZjYTE5YzNiYWFhYTE2NiIsIm5iZiI6MTcyNzg3ODE2Mi4yNTg4MzcsInN1YiI6IjY2ZmQ0YTA5ZTI2YTUzYzEyMjU5NWRkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ir0Ji-kYDb2aUT0F6PAuNSvXoZUa5dxSmWp-BVRCJE8'
  }
};


export const fetchMovies = async () => {
    const { data } = await axios.get(URL, options)
    return data;
}
export const fetchMovieById = async (movieId) => {
    const { data } = await axios.get(`${URLBYID}/${movieId}`, options)
    return data;
}

export const fetchCreditsById = async (movieId) => {
    const { data } = await axios.get(`${URLBYID}/${movieId}/credits`, options)
    return data;
}