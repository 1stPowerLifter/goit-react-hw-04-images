import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const key = "28194425-a39cc5ed971e198ecf1a97b89"

export const ApiRequest = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
}