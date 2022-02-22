import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import { Logotype } from '@master-c8/commons';

import React, { Fragment } from 'react';
import { HeaderContent, BtnGroup } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children, route, notLogeedComponent }) => {
  const NotLogeedComponent = notLogeedComponent || null;
  return (
    <HeaderContent>
      <Container>
        <Link to={route}>
          <Logotype width={140} />
        </Link>
        {notLogeedComponent && <NotLogeedComponent />}
        <BtnGroup>
          {!isLogged && (
            <Fragment>
              <Button variant="outlined" size="large" onClick={onClickLogin} type="button">
                Login
              </Button>
              <Button variant="contained" size="large" onClick={onClickSignup} type="button">
                Sign Up
              </Button>
            </Fragment>
          )}
        </BtnGroup>
        {isLogged && children}
      </Container>
    </HeaderContent>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isLogged: PropTypes.bool,
  notLogeedComponent: PropTypes.node,
  onClickLogin: PropTypes.func,
  onClickSignup: PropTypes.func,
  route: PropTypes.string,
};

Header.defaultProps = {
  isLogged: false,
  children: null,
  route: '',
};

export default Header;
