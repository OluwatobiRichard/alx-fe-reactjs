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
            const result = await onSearch(username); // Fetch user data
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
                    <div className="user-card p-4 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
                        <img
                            src={user.avatar_url}
                            alt={`${user.login}'s avatar`}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold">{user.login}</h3>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
