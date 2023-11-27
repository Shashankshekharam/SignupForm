import React from 'react'
import { Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

    const [openBlogMenu, setOpenBlogMenu] = React.useState(false);
    const userData = useSelector(state => state.user.userData); 
    const navigate = useNavigate();


  const handleClick = () => {
    setOpenBlogMenu(!openBlogMenu);
  };

 return (
    <>
  <Drawer variant="permanent" anchor="left">
    <List>
      {/* Profile Item */}
      <ListItem button>
        <ListItemText primary="Profile" />
      </ListItem>

      {/* Blog Menu */}
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Blog" />
        {openBlogMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openBlogMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={()=>{navigate('/blog')}}>
            <ListItemText primary="Blog List" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Categories List" />
          </ListItem>
        </List>
      </Collapse>

      {/* Tasks Item */}
      <ListItem button>
        <ListItemText primary="Tasks" />
      </ListItem>
    </List>
  </Drawer>

  {userData ? (
  <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>Dashboard</h1>
    <h3>Welcome {userData.firstName} {userData.lastName}</h3>
  </div>
) : (
  <div>Loading...</div>
)}

    </>
);

}

export default Dashboard