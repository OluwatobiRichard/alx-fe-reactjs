import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUser(null);

        try {
            const result = await onSearch(username); // Call the search function passed via props
            setUser(result);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        GitHub Username
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
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            <div className="results-container mt-6">
                {loading && <p className="text-center">Loading...</p>}
                {error && (
                    <p className="text-center text-red-500">
                        Looks like we can't find the user.
                    </p>
                )}
                {user && (
