// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (error) {
      setError("Looks like we can't find the user");
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded-lg mb-2"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {isLoading && <div className="text-center py-4">Loading...</div>}

      {error && <div className="text-red-500 text-center py-4">{error}</div>}

      {userData && !isLoading && !error && (
        <div className="border rounded-lg p-6">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-center mb-2">{userData.login}</h2>
          <div className="text-center mb-4">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
