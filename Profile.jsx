import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    const loggedInUserId = '2'; // Update this with your actual logic

    // Define your API endpoint URL for fetching user details
    const apiUrl = `http://110.227.208.185/api/practical_1/users/${loggedInUserId}`;

    // Make the GET request with Axios
    axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0',
      },
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  // Handle user details update
  const handleUpdateProfile = () => {
    // Define your API endpoint URL for updating user details
    const apiUrl = `http://110.227.208.185/api/practical_1/users/${user.id}`;

    // Make the PUT request with Axios
    axios.put(apiUrl, user, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0',
      },
    })
      .then((response) => {
        console.log('User details updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
      });
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Display User Details */}
      <div>
        <h2>User Details</h2>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        {/* Display other user details as needed */}
      </div>

      {/* Update User Details Form */}
      <div>
        <h2>Update Profile</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields for additional user details */}
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;
