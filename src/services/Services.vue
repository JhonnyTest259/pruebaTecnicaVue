  
<template></template>
<script>
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

// const apiClient = axios.create({
//     baseURL: baseUrl,
//     headers: options.headers
// });

export default {
    name: "Services",
    data() {
        return {
            movies: {}
        };
    },
    methods: {
        async fetchData() {
            const response = await axios.get(`${baseUrl}/discover/movie`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${config.Bearer} `
                }
            });
            this.movies = response.data;
        }
    },
    async created() {
        await this.fetchData(); // Llama al método fetchData cuando el componente se crea
    }
};
// export { fetchData, sum }
</script>