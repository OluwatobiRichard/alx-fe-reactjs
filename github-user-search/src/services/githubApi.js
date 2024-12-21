import axios from 'axios';

// Use the API base URL from environment variables
const API_URL = import.meta.env.VITE_GITHUB_API_URL; // Ensure this is correctly defined in the .env file

/**
 * Fetch user data from GitHub API by username
 * @param {string} username - GitHub username to search for
 * @returns {Promise<Object>} - Resolves with user data object
 * @throws {Error} - Throws if the request fails
 */
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('Unable to fetch user data'); // Friendly error message
    }
};
