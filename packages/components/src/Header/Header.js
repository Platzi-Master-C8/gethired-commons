import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import { Logotype } from '@master-c8/commons';

import { HeaderContent, BtnGroup, BtnGroupComp } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children, route, notLogeedComponent }) => {
  const NotLogeedComponent = notLogeedComponent || null;
  return (
    <HeaderContent>
      <Container>
        <Link to={route}>
          <Logotype width={140} />
        </Link>
        <BtnGroupComp>
          {notLogeedComponent && <NotLogeedComponent />}
          {!isLogged && (
            <BtnGroup>
              <Button
                className="btn-general"
                variant="outlined"
                size="large"
                onClick={onClickLogin}
                type="button"
              >
                Login
              </Button>
              <Button
                className="btn-general"
                variant="contained"
                size="large"
                onClick={onClickSignup}
                type="button"
              >
                Sign Up
              </Button>
            </BtnGroup>
          )}
          {isLogged && children}
        </BtnGroupComp>
      </Container>
    </HeaderContent>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isLogged: PropTypes.bool,
  notLogeedComponent: PropTypes.any,
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
