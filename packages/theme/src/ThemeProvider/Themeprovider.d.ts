import { ReactNode, ReactElement } from 'react';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: any;
}

export default function ThemeProvider(props: ThemeProviderProps): ReactElement<ThemeProviderProps>;
