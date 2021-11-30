import { Button } from '@mui/material';
import { ThemeProvider } from '@master-c8/theme';
import { forwardRef } from 'react';

const ButtonExample = forwardRef(function ButtonExample(props, ref) {
  return <Button ref={ref} {...props} />;
});
export default ButtonExample;
