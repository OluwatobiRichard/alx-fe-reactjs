import axios from 'axios';

const API_URL = "https://api.github.com";

/**
 * Fetch users based on advanced search criteria.
 * @param {Object} filters - Search filters including username, location, and minRepos.
 * @returns {Promise<Object[]>} - Resolves with an array of user objects.
 * @throws {Error} - Throws if the request fails.
 */
export const fetchUsers = async (filters) => {
    const { username, location, minRepos } = filters;

    // Construct the search query
    let query = username ? `${username} in:login` : '';
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    try {
        const response = await axios.get(`${API_URL}/search/users?q=${encodeURIComponent(query)}`);
        return response.data.items; // Array of user objects
    } catch (error) {
        throw new Error('Unable to fetch user data');
    }
};
