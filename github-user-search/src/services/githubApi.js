import axios from 'axios';

// Explicitly set the GitHub API base URL
const API_URL = "https://api.github.com";

/**
 * Fetch user data from GitHub API by username
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - Resolves with user data object
 * @throws {Error} - Throws if the request fails
 */
export const fetchUserData = async (username) => {
    try {
        // Explicitly use the base URL in the request
        const response = await axios.get(`${API_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('Unable to fetch user data');
    }
};
