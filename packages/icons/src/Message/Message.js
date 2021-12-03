import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const Message = forwardRef(function Message(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </SvgIcon>
  );
});

export default Message;
