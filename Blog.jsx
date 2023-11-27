import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'list'
  const [filters, setFilters] = useState({
    createdDate: '',
    category: '',
    authorName: '',
  });
  const [blogs, setBlogs] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(''); // Assuming you have a way to get the logged-in user's ID
  const bearerToken = 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0';


  useEffect(() => {
    // Define your API endpoint URL
    const apiUrl = 'http://110.227.208.185/api/practical_1/blog?created_by=2&category_id=3';


    // Make the GET request with Axios
    axios.get(apiUrl, {headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 2|GH7v0T3KKt6FU3w0VzWYW8hujHxXZzNdWU9QyZGYf39c51b0',
      },})
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle filter changes and update the 'filters' state
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Handle blog deletion by the author
  const handleDeleteBlog = (blogId) => {
    // Make a DELETE request to the API to delete the blog with 'blogId'
  };

  return (
    <div>
      {/* View Mode Toggle Buttons */}
      <div>
        <button onClick={() => setViewMode('card')}>Card View</button>
        <button onClick={() => setViewMode('list')}>List View</button>
      </div>

      {/* Filters */}
      <div>
        <input
          type="text"
          name="createdDate"
          placeholder="Created Task Date"
          value={filters.createdDate}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category of Task"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          value={filters.authorName}
          onChange={handleFilterChange}
        />
      </div>

      {/* Blog List */}
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            {blog.authorId === loggedInUserId && (
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>

      {/* Add Blog Button */}
      <button>Add Blog</button>
    </div>
  );
}

export default Blog;
