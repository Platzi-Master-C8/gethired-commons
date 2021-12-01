import { Button as ButtonMui } from '@mui/material';
import PropTypes from 'prop-types';

const Button = ({ ...props }) => {
  return (
    <ButtonMui {...props}/>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
};


export default Button;
