import React from 'react';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';

import { Currency, BriefCase, Blog } from '@master-c8/icons';
import { COLORS } from '@master-c8/theme';

import Header from './Header';

const HeaderJob = () => {
  return (
    <Header isLogged>
      <MenuList sx={{ display: 'flex' }}>
        <a
          style={{ textDecoration: 'none' }}
          href="https://platzi-master-c8.github.io/gethired-jobplacement-salaries-frontend/"
        >
          <MenuItem sx={{ flexDirection: 'column', gap: '5px' }}>
            <ListItemIcon>
              <Currency color="secondary" />
            </ListItemIcon>
            <Typography color="secondary" sx={{ fontSize: '13px' }}>
              Salary Calculator
            </Typography>
          </MenuItem>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href="https://platzi-master-c8.github.io/gethired-jobplacement-ratings/"
        >
          <MenuItem sx={{ flexDirection: 'column', gap: '5px' }}>
            <ListItemIcon sx={{ color: '#000' }}>
              <Blog />
            </ListItemIcon>
            <Typography color="text" sx={{ fontSize: '13px', color: '#000' }}>
              Raitings
            </Typography>
          </MenuItem>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href="https://platzi-master-c8.github.io/gethired-jobplacement-enterprise-Frontend/"
        >
          <MenuItem sx={{ flexDirection: 'column', gap: '5px' }}>
            <ListItemIcon sx={{ color: '#000' }}>
              <BriefCase />
            </ListItemIcon>
            <Typography color="text" sx={{ fontSize: '13px', color: '#000' }}>
              Company
            </Typography>
          </MenuItem>
        </a>
        <MenuItem>
          <Avatar sx={{ bgcolor: COLORS.secondary }}>J</Avatar>
        </MenuItem>
      </MenuList>
    </Header>
  );
};

export default HeaderJob;
