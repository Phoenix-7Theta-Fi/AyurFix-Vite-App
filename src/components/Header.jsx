import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AyurFix
        </Typography>
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>Dashboard</MenuItem>
            <MenuItem component={Link} to="/prakriti" onClick={handleClose}>Prakriti</MenuItem>
            <MenuItem component={Link} to="/physical-activity" onClick={handleClose}>Physical Activity</MenuItem>
            <MenuItem component={Link} to="/lifestyle" onClick={handleClose}>Lifestyle</MenuItem>
            <MenuItem component={Link} to="/consultation" onClick={handleClose}>Consultation</MenuItem>
            <MenuItem component={Link} to="/lab-tests" onClick={handleClose}>Lab Tests</MenuItem>
            <MenuItem component={Link} to="/calendar" onClick={handleClose}>Calendar</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
