import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const Website = forwardRef(function Website(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path
        d="M17.3333 4H5.66667C4.74619 4 4 4.74619 4 5.66667V17.3333C4 18.2538 4.74619 19 5.66667 19H17.3333C18.2538 19 19 18.2538 19 17.3333V5.66667C19 4.74619 18.2538 4 17.3333 4Z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 8.28577H19" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 19.0001V8.28577" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
});

export default Website;
