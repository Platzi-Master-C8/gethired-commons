import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const ChevronUp = forwardRef(function ChevronUp(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </SvgIcon>
  );
});

export default ChevronUp;
