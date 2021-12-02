import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const ChevronLeft = forwardRef(function ChevronLeft(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </SvgIcon>
  );
});

export default ChevronLeft;
