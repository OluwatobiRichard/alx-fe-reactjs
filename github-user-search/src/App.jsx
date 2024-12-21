// src/App.jsx
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import { searchUser } from './services/githubApi';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await searchUser(username);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        GitHub User Search
      </h1>
      
      <SearchForm onSearch={handleSearch} />
      
      {error && (
        <div className="text-red-500 text-center">
          {error}
        </div>
      )}

      {userData && (
        <div className="border rounded-lg p-4">
          <img 
            src={userData.avatar_url} 
            alt={userData.login}
            className="w-32 h-32 rounded-full mx-auto mb-4" 
          />
          <h2 className="text-xl font-bold text-center mb-2">
            {userData.name || userData.login}
          </h2>
          <p className="text-center text-gray-600">
            {userData.bio || 'No bio available'}
          </p>
          <div className="mt-4 text-center">
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

export default App;