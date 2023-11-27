import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../actions/userActions';


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
    email: '',
    userRegistered: false
  });
  const [tempPassword, setTempPassword] = useState('12345');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError,setShowError]=useState(false);


  const profileImage = "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Pic.png"; // Placeholder image URL

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     // Check if all fields are filled
  const allFieldsFilled = formData.firstName && formData.lastName && formData.city && formData.phone && formData.email;
  
  setFormData({ ...formData, userRegistered: true });

  if (allFieldsFilled) {
    setIsSubmitted(true);
    dispatch(setUserData(formData));
  } else {
    setShowError(true)
  }
  };
  const handleFocus = () => {
    setShowError(false);
  };
  const handleLoginRedirect = () => {
    if(formData.userRegistered)
    {
      navigate('/login');
    }
  };
  return (
    <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button onClick={handleLoginRedirect} variant="contained" color="primary" style={{ alignSelf: 'flex-end', marginBottom: '20px',marginRight:'25%',marginTop:'5%' }}>
        Login
      </Button>
      <Avatar src={profileImage} alt="Profile Image" sx={{ width: 150, height: 150, marginBottom: 2 }} />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '30%' }}>
        <TextField name="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleChange} onFocus={handleFocus} />
        <TextField name="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleChange} onFocus={handleFocus} />
        <TextField name="city" label="City" variant="outlined" value={formData.city} onChange={handleChange} onFocus={handleFocus} />
        <TextField name="phone" label="Phone" variant="outlined" value={formData.phone} onChange={handleChange} onFocus={handleFocus} />
        <TextField name="email" label="Email" variant="outlined" value={formData.email} onChange={handleChange} onFocus={handleFocus} />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>

      {isSubmitted && (
        <Alert severity="info" style={{ marginTop: '20px' }}>
          Your temporary password is: {tempPassword}
        </Alert>
      )}
      {showError && (
        <Alert severity="error" style={{ marginTop: '20px' }}>
          Please fill all the fields.
        </Alert>
      )
       }
    </div>
  );
}

export default Register;
