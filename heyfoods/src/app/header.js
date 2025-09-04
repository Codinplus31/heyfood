'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transform: 'none',
  backgroundColor: "white",
//   width: "100%",
  transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1)',
}));

const LogoLink = styled('a')(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '20ch',
  },
}));

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div id="theAppBarId" style={{width: "95%", borderBottom: "2px solid rgba(150, 150, 150, 0.1)"}}>
      <Toolbar className="jss279" sx={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center',  }} className="jss283">
          {/* Menu Icon */}
          <IconButton edge="start" color="" aria-label="menu" sx={{ textTransform: 'none', color: 'black',  }}>
            <MenuIcon width="50" height="50"/>
          </IconButton>

          {/* Logo */}
          <LogoLink href="/stores">
            <img src="/logo.svg" alt="logo" width="40" height="40" />
          </LogoLink>

          {/* Set Location Button */}
          <Button
            id="setLocationButton"
            variant="text"
            startIcon={<LocationOnIcon width="50" height="50"/>}
            color="inherit"

            sx={{ textTransform: 'none', color: 'black', marginLeft: "1rem" }}
          >
            Set Location
          </Button>
        </div>

        {/* Search Bar */}
        <div className="jss285" style={{borderRadius: "12rem", overflow:"hidden", width: "15%"}}>
          <InputBase
  id="nonMobileSearchId"
  placeholder="Search restaurants or food"
  type="search"
  fullWidth
  startAdornment={
    <InputAdornment position="end" sx={{ ml: 1 }}>
      <img src="/tiny-search.svg" alt="search" />
    </InputAdornment>
  }
  sx={{
    '& .MuiInputBase-input': {
      padding: '0.5em 1.2em',

    fontSize: '103%',
    borderRadius: '3em',
    letterSpacing: '-0.5px',
    backgroundColor: '#F0F0F0',
    },
    backgroundColor: '#F0F0F0'
  }}
/>
        </div>

        {/* Close Button (e.g., for mobile) */}
        {/* <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          className="jss290 jss291 jss292"
          size="small"
        >
          <CloseIcon />
        </IconButton> */}

        {/* Sign In & Cart */}
        <div className="jss289 jss290" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Button variant="text" color="inherit" sx={{color: 'black', fontWeight: 400}}>
            <Typography variant="body2" className="jss378">
              Sign In
            </Typography>
          </Button>

          <Badge badgeContent={0}  invisible={true} overlap="circular">
            <Button
              variant="contained"
              disableElevation
              startIcon={<ShoppingCartIcon color="white" fontSize="small" />}
              
//               sx={{
// color: "white",
//     padding: "8px 24px",
//     borderRadius: '5em',
//     bgColor: 'green',
//     // Text color for contrast
//     '&:hover': {
//       bgColor: 'gray', // Optional: hover effect
//     },
//   }}

  sx={{
  bgcolor: 'common.black',
  color: 'common.white',
  padding: "8px 24px",
  borderRadius: '5em',
  '&:hover': {
    bgcolor: 'success.main', // Uses green from theme
  }
}}
            >
              <span className="jss354 jss378">Cart • 0</span>
            </Button>
          </Badge>
        </div>
      </Toolbar>
    </div>
  );
}