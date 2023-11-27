import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import Category from './components/Category';
import Profile from './components/Profile';
import Error from './components/Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path ="/category" element={<Category />} />
        <Route path ="/profile" element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
