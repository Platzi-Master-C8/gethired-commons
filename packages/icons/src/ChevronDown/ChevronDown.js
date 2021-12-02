import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const ChevronDown = forwardRef(function ChevronDown(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </SvgIcon>
  );
});

export default ChevronDown;
