import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Login() {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });


  const userData = useSelector(state => state.user.userData); 
  const [tempPassword, setTempPassword] = useState('12345');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError,setShowError]=useState(false);
  const navigate = useNavigate();


  const profileImage = "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Pic.png"; // Placeholder image URL

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFieldsFilled = formData.email && formData.password;
    if (allFieldsFilled && formData.email === userData.email && formData.password === tempPassword) {
      navigate('/dashboard');
    } else {
      setShowError(true)
    }
  };
  
  const handleFocus = () => {
    setShowError(false);
  };
  const handleRegisterRedirect = () => {
    navigate('/register');
  };
  return (
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'5%' }}>
   <Button onClick={handleRegisterRedirect} variant="contained" color="primary" style={{ alignSelf: 'flex-end', marginBottom: '20px',marginRight:'25%',marginTop:'5%' }}>
        Register
      </Button>
      <Avatar src={profileImage} alt="Profile Image" sx={{ width: 150, height: 150, marginBottom: 2 }} />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '30%' }}>
    
        <TextField name="email" label="Email" variant="outlined" value={formData.email} onChange={handleChange} onFocus={handleFocus} />
        <TextField name="password" label="Password" variant="outlined" value={formData.password} onChange={handleChange} onFocus={handleFocus} />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>

      {showError && (
        <Alert severity="error" style={{ marginTop: '20px' }}>
          Please fill all the fields.
        </Alert>
      )
       }
    </div>
  );
}

export default Login;
