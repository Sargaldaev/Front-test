import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import ModalLogin from './ModalLogin.tsx';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import user from '../../assets/user.svg';
import Logo from '../../assets/Logo.png';
import userProfile from '../../assets/userProfile.svg';
import users from '../../assets/users.svg';
import building from '../../assets/building.svg';
import homeIcon from '../../assets/home-icon.svg';
import shoppingBag from '../../assets/shopping-bag.svg';
import trophy from '../../assets/trophy.svg';
import RussianFLag from '../../assets/RussianFLag.svg';
import chevron from '../../assets/chevron-down.svg';
import notification from '../../assets/notification2.svg';
import '../../style.css';
import { useNavigate } from 'react-router-dom';
import { switchModal } from '../../store/userSlice.ts';

const pages = ['Лента', 'Маркетплейс', 'Рейтинги', 'Соревнования', 'Организации'];
const pagesSmallScreen = [
  'Мой профиль',
  'Лента',
  'Маркетплейс',
  'Уведомления',
  'Рейтинги',
  'Соревнования',
  'Организации',
];
const icons = [homeIcon, shoppingBag, users, trophy, building, RussianFLag, user, chevron];
const iconSmallScreen = [
  user,
  homeIcon,
  shoppingBag,
  notification,
  users,
  trophy,
  building,
  RussianFLag,
  user,
  chevron,
];

function Header() {
  const { user: User } = useSelector((state: RootState) => state.user);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const isMd = useMediaQuery('(max-width:400px)');

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar sx={{ background: 'white' }} position="static">
      <Container>
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginRight: isSmallScreen ? 0 : '43px',
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                ml: isMd ? 10 : 0,
              }}
            >
              <DragHandleIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleCloseNavMenu}>
              <Box sx={{ width: 350 }} role="presentation" onClick={handleCloseNavMenu} onKeyDown={handleCloseNavMenu}>
                <List>
                  {pagesSmallScreen.map((page, index) => (
                    <ListItem key={page}>
                      <img src={iconSmallScreen[index]} alt="Logo" style={{ padding: '8px' }} />
                      <ListItemText
                        sx={{
                          fontWeight: '548',
                          marginRight: isSmallScreen ? 0 : '21px',
                          fontSize: '14px',
                          color: index === 1 ? '#06082C' : '#9395B8',
                        }}
                        primary={page}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box
                  color="black"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: '548',
                    padding: '8px',
                    ml: 2,
                  }}
                >
                  <img src={icons[5]} alt="icon" />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '548',
                      marginLeft: 1,
                    }}
                  >
                    RU
                  </Typography>
                  <img
                    src={icons[7]}
                    alt="icon"
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                className="menu-item"
                onClick={() => index === 0 && navigate('/')}
                sx={{
                  fontWeight: '548',
                  marginRight: isSmallScreen ? 0 : '21px',
                  fontSize: '14px',
                  color: index === 0 ? '#06082C' : '#9395B8',
                }}
              >
                <img src={icons[index]} alt="Logo" style={{ padding: '8px' }} />
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexGrow: 0 }}>
            <Box
              color="black"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '548',
                marginRight: isSmallScreen ? 0 : '20px',
              }}
            >
              <img src={icons[5]} alt="icon" />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '548',
                  marginLeft: 1,
                }}
              >
                RU
              </Typography>
              <img
                src={icons[7]}
                alt="icon"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Box>

            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  onClick={() => dispatch(switchModal('login'))}
                  sx={{
                    background: '#f1f3f7',
                    padding: User ? '0' : '10px',
                    borderRadius: '10px',
                  }}
                  alt="Remy Sharp"
                  src={User ? userProfile : icons[6]}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
