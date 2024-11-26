import React, { useContext } from 'react'; // Importing useContext and React
import UserContext from './UserContext'; // Importing UserContext

function UserProfile() {
  // Consuming context
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
