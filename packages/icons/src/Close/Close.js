import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const Close = forwardRef(function Close(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </SvgIcon>
  );
});

export default Close;
