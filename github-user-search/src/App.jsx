import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUsers } from './services/githubService';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (filters) => {
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
            const data = await fetchUsers(filters);
            setUsers(data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App p-4">
            <h1 className="text-center text-2xl font-bold mb-4">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">Unable to fetch user data.</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-center">{user.login}</h3>
                        {user.location && <p className="text-center text-gray-600">{user.location}</p>}
                        <p className="text-center text-blue-500">
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                            >
                                View Profile
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
