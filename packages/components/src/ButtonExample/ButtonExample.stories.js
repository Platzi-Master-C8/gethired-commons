import { ThemeProvider } from '@master-c8/theme';

import ButtonExample from './ButtonExample';

export default {
  title: 'example/button',
  component: ButtonExample,
};

export const Default = () => {
  return (
    <ThemeProvider>
      <ButtonExample variant="contained">Button Dafault</ButtonExample>
    </ThemeProvider>
  );
};
