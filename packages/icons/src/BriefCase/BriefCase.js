import { forwardRef } from 'react';
import { SvgIcon } from '@mui/material';

const BriefCase = forwardRef(function BriefCase(props, ref) {
  return (
    <SvgIcon {...props} {...ref}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </SvgIcon>
  );
});

export default BriefCase;
