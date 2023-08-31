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

const fetchData = async () => {
    try {
        const response = await apiClient.get('/discover/movie');
        return response.data;
    } catch (error) {
        throw error;
    }
}

const sum = (a, b) => {
    return a + b;
}

// export { fetchData, sum }
module.exports = sum