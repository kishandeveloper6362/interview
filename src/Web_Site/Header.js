import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// image
import headerlogo from '../Images/headerlogo.png'
import Sliderimg1 from '../Images/sliderimg1.jpg'
import Sliderimg2 from '../Images/sliderimg2.jpg'
import Sliderimg3 from '../Images/sliderimg3.jpg'
import Sliderimg4 from '../Images/sliderimg4.jpg'
import React from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Header = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { text: 'Home', path: "/" },
    { text: 'Course', path: '/courses' },
    { text: 'About', path: '/about' },
    { text: 'Gallery', path: '/gallary' },
    { text: 'Contact', path: '/contact' }
  ];
  const settings = ['Profile', 'Account'];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>

      <AppBar position="static" className='shadow'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={headerlogo} alt="" width={'90%'} height={'120px'} />
              <Typography variant='' sx={{ color: 'black', fontSize: '22px', lineHeight: '20px', color: '#193566' }}><Typography variant='' sx={{ color: '#D2AB68', fontSize: '22px' }}>
                STAR
              </Typography>
                FORD
                <br />
                <Typography variant='' sx={{ fontSize: '14px', color: '#193566' }}>UNIVERSITY</Typography></Typography>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  <Link to={page.path} id='header_page'>{page.text}</Link>
                </Button>
              ))}
            </Box>

{/* alert box */}
            <Button variant="outlined" onClick={handleClickOpen} sx={{marginRight: '26px', borderColor: '#193597', color: '#193597'}}>
              Click Me?
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Welcome My Dear User?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Thank For Visit StarFord University, First Of All We Are Greatfully Thanks To You
                  . Now You Are Best University of The Phonix City. Now We Want To Make You Expirience The Best Of The World Thanks To You.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Okay</Button>
                {/* <Button onClick={handleClose} autoFocus>
                  Agree
                </Button> */}
              </DialogActions>
            </Dialog>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" >{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </Box>
  )
}

export default Header