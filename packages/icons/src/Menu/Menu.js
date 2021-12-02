import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const Menu = forwardRef(function Menu(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </SvgIcon>
  );
});

export default Menu;
