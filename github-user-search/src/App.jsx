import React from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const handleSearch = async (username) => {
        const user = await fetchUserData(username);
        return user;
    };

    return (
        <div className="App">
            <h1 className="text-center text-2xl font-bold mb-4">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
        </div>
    );
};

export default App;
