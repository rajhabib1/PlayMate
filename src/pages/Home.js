import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/apiService'; // Import the API service

const HomePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    getUserData();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {userData.length > 0 ? (
          userData.map(user => (
            <li key={user._id}>{user.name}</li>
          ))
        ) : (
          <p>No user data available</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
