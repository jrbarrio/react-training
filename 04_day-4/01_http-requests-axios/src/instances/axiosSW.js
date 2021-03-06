import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api'
});

// Instance object properties can be overriden
instance.defaults.headers.common['Authorization'] = 'TOKEN SWAPI';

export default instance;