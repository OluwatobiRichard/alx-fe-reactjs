import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ username, location, minRepos });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
                    Minimum Repositories
                </label>
                <input
                    id="minRepos"
                    type="number"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter minimum repository count (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
};

export default Search;
