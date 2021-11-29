import { Button } from '@mui/material';
import { ThemeProvider } from '@master-c8/theme';

const ButtonExample = (props) => {
  return (
    <ThemeProvider>
      <Button variant="contained" {...props}/>
    </ThemeProvider>
  );
};

export default ButtonExample;
