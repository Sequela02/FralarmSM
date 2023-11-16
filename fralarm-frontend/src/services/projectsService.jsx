import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // Replace with your actual backend URL

export const fetchProjects = () => {
    return axios.get(`${BASE_URL}/projects`);
};
