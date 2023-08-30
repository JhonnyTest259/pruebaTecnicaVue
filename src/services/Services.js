import axios from 'axios';
import config from '@/config';

const baseUrl = config.apiUrl;
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.Bearer} `
    }
};

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: options.headers
});

export const fetchData = async () => {
    try {
        const response = await apiClient.get('/discover/movie');
        return response.data;
    } catch (error) {
        throw error;
    }
}
