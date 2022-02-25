import React, { useState } from 'react';

import Link from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { Currency, BriefCase, Blog, Menu, Close } from '@master-c8/icons';
import { COLORS } from '@master-c8/theme';

import Header from './Header';

import { WrapperMenu } from './Header.styles';

const HeaderJob = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Header isLogged {...props}>
      <IconButton
        aria-label="menu"
        sx={{ display: { sm: 'inherit', md: 'none' } }}
        onClick={handleOpen}
      >
        {!open ? <Menu color="secondary" size="large" /> : <Close color="secondary" size="large" />}
      </IconButton>
      <WrapperMenu open={open}>
        <MenuList sx={{ display: { sm: 'initial', md: 'flex' } }}>
          <MenuItem>
            <Link
              sx={{
                flexDirection: { sm: 'row', md: 'column' },
                alignItems: 'center',
                gap: '5px',
                display: 'flex',
                textDecoration: 'none',
              }}
              href="https://platzi-master-c8.github.io/gethired-jobplacement-salaries-frontend/"
            >
              <ListItemIcon>
                <Currency color="secondary" />
              </ListItemIcon>
              <Typography color="secondary" sx={{ fontSize: { sm: '16px', md: '13px' } }}>
                Salary Calculator
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                flexDirection: { sm: 'row', md: 'column' },
                alignItems: 'center',
                gap: '5px',
                display: 'flex',
                textDecoration: 'none',
              }}
              href="https://platzi-master-c8.github.io/gethired-jobplacement-ratings/"
            >
              <ListItemIcon sx={{ color: '#000' }}>
                <Blog />
              </ListItemIcon>
              <Typography color="text" sx={{ fontSize: { sm: '16px', md: '13px' }, color: '#000' }}>
                Raitings
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{
                flexDirection: { sm: 'row', md: 'column' },
                alignItems: 'center',
                gap: '5px',
                display: 'flex',
                textDecoration: 'none',
              }}
              href="https://platzi-master-c8.github.io/gethired-jobplacement-enterprise-Frontend/"
            >
              <ListItemIcon sx={{ color: '#000' }}>
                <BriefCase />
              </ListItemIcon>
              <Typography color="text" sx={{ fontSize: { sm: '16px', md: '13px' }, color: '#000' }}>
                Company
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem sx={{ display: { xs: 'none', md: 'initial' } }}>
            <Avatar sx={{ bgcolor: COLORS.secondary }}>J</Avatar>
          </MenuItem>
        </MenuList>
      </WrapperMenu>
    </Header>
  );
};

export default HeaderJob;
