// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let url = `https://api.github.com/search/users?q=${username}`;

    if (location) {
      url += `+location:${location}`;
    }

    if (minRepos) {
      url += `+repos:>${minRepos}`;
    }

    const response = await axios.get(url);
    return response.data.items[0]; // Return the first user that matches
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
