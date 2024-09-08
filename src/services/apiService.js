// Import necessary libraries
const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${apiUrl}/users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Export other API functions as needed
