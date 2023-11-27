import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    // Define your API endpoint URL for fetching categories
    const apiUrl = 'http://110.227.208.185/api/practical_1/categories';

    // Make the GET request with Axios
    axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0',
      },
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Handle addition of a new category
  const handleAddCategory = () => {
    // Define your API endpoint URL for adding a new category
    const apiUrl = 'http://110.227.208.185/api/practical_1/category';

    // Make the POST request with Axios
    axios.post(apiUrl, { name: newCategoryName }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0',
      },
    })
      .then((response) => {
        // Update the local state with the new category
        setCategories([...categories, response.data]);
        // Clear the input field
        setNewCategoryName('');
      })
      .catch((error) => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div>
      {/* Display list of existing categories */}
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      {/* Add Category Form */}
      <div>
        <h2>Add Category</h2>
        <label>
          Category Name:
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        </label>
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
}

export default Category;
