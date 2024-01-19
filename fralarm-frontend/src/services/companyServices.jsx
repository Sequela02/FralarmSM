import axios from 'axios';

// Base URL for the backend API
const BASE_URL = 'http://localhost:8080/api'; //

/**
 * Fetches a list of companies from the backend API.
 *
 * @returns {Promise<AxiosResponse<any>>} A promise that resolves to the response of the HTTP GET request.
 */
export const fetchCompanies = () => {
    return axios.get(`${BASE_URL}/companies`);
};