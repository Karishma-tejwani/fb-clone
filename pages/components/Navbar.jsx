import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { deepOrange } from '@mui/material/colors';
import Autocomplete from '@mui/material/Autocomplete';

const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '5px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '15px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed">
      <StyledToolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          FB Clone
        </Typography>
        <FacebookIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          {/* <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={topFilms.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Movies.."
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          /> */}
          <InputBase placeholder="Search Here..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={15} max={9} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ bgcolor: deepOrange['A200'], width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          >
            K
          </Avatar>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ bgcolor: deepOrange['A200'], width: 30, height: 30 }}>
            K
          </Avatar>
          <Typography variant="span">Karishma</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="fade-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
