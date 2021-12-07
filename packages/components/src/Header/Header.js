import PropTypes from 'prop-types';

import { Button, Container } from '@mui/material';

import { Logotype } from '@master-c8/commons';

import { HeaderContent, BtnGroup } from './Header.styles';

const Header = ({ onClickLogin, onClickSignup, isLogged, children }) => {
  return (
    <HeaderContent>
      <Container>
        <Logotype width={140} />
        {!isLogged && (
          <BtnGroup>
            <Button variant="outlined" size="large" onClick={onClickLogin} type="button">
              Login
            </Button>
            <Button variant="contained" size="large" onClick={onClickSignup} type="button">
              Sign Up
            </Button>
          </BtnGroup>
        )}
        {isLogged && children}
      </Container>
    </HeaderContent>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  isLogged: PropTypes.bool,
  onClickLogin: PropTypes.func.isRequired,
  onClickSignup: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLogged: false,
  children: null,
};

export default Header;
